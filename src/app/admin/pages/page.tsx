"use client";

import React, { useEffect, useState } from "react";
import s from "./pages.module.sass";
import { BASE_URL } from "@/$api";
import Link from "next/link";

function Pages() {
  const [isAuth, setIsAuth] = useState(false);
  const [pages, setPages] = useState([]);

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
      const response = await fetch(`${BASE_URL}/pages`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("access-token")}`,
        },
      });

      const data = await response.json();

      if (data.docs) {
        setPages(data.docs);
      }
    }

    getPages();
  }, []);

  return (
    <div className={s.container}>
      {isAuth ? (
        <div className={s.inner}>
          <div className={s.pages}>
            {pages?.length > 0 ? <h1>Pages</h1> : null}
            {pages.map((p: any) => (
              <div key={p.id}>
                <Link href={`/admin/pages/update/${p.id}`}>{p.path}</Link>
              </div>
            ))}
          </div>
          <Link href="/admin/pages/create">Create a new page</Link>
        </div>
      ) : null}
    </div>
  );
}

export default Pages;
