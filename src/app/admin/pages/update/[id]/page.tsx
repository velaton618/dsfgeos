"use client";

import { BASE_URL } from "@/$api";
import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import s from "./page.module.sass";
import Link from "next/link";

function Page({params}: {params: any}) {
  const [isAuth, setIsAuth] = useState(false);

  const [content, setContent] = React.useState("# DSF-GEOS");
  const [path, setPath] = React.useState("");

  async function updatePage() {
    const response = await fetch(`${BASE_URL}/pages/${params.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Authorization: `JWT ${localStorage.getItem("access-token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: path,
        content: content,
      }),
    });

    const data = await response.json();
    if (data.doc) {
      alert("Updated successfully");
    }
  }

  useEffect(() => {
    async function checkAuth() {
      const response = await fetch(`${BASE_URL}/admins/me`, {
        credentials: "include",
        headers: {
          Authorization: `JWT ${localStorage.getItem("access-token")}`,
        },
      });

      const data = await response.json();

      if (data.user) {
        setIsAuth(true);
      } else {
        const response = await fetch(`${BASE_URL}/admins/refresh-token`, {
          credentials: "include",
          headers: {
            Authorization: `JWT ${localStorage.getItem("access-token")}`,
          },
        });

        const data = await response.json();
        if (data.user) {
          setIsAuth(true);
        }
      }
    }

    checkAuth();
  }, []);

  useEffect(() => {
    async function getPages() {
      const response = await fetch(`${BASE_URL}/pages/${params.id}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("access-token")}`,
        },
      });

      const data = await response.json();
      
      if (data) {
        setContent(data.content)
        setPath(data.path)
      }
    }

    getPages();
  }, [])

  return (
    <div className={s.container}>
      {isAuth ? (
        <div className={s.createPage}>
          <h1>Update page</h1>
          <label htmlFor="path">Path</label>
          <input
            value={path}
            onChange={(e) => setPath(e.target.value)}
            id="path"
            placeholder="/example"
          />
          <label htmlFor="content">Content</label>
          <MDEditor value={content} onChange={(v) => setContent(v || "")} />
          <button onClick={updatePage} className={s.createBtn}>
            Update
          </button>

          <Link href="/admin/pages">Back to pages</Link>
        </div>
      ) : null}
    </div>
  );
}

export default Page;
