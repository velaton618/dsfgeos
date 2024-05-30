"use client";

import React, { useEffect, useState } from "react";
import s from "./admin.module.sass";
import { BASE_URL } from "@/$api";
import Link from "next/link";

function Admin() {
  const [isAuth, setIsAuth] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`${BASE_URL}/admins/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

		const data = await res.json();

    if (data.token) {
      setIsAuth(true);
      localStorage.setItem('access-token', data.token);
    }
  }

  useEffect(() => {
    async function checkAuth() {
      const response = await fetch(`${BASE_URL}/admins/me`, {
        credentials: 'include',
        headers: {
          Authorization: `JWT ${localStorage.getItem("access-token")}`
        }
      });

      const data = await response.json();

      if (data.user) {
        setIsAuth(true);
      }
    }

    checkAuth();
  }, []);

  return (
    <div className={s.container}>
      {!isAuth ? (
        <div className={s.login}>
          <form className={s.form} onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className={s.input} placeholder="Email" type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} className={s.input} placeholder="Password" type="password" />
            <button className={s.button} type="submit">
              Log in
            </button>
          </form>
        </div>
      ) : (
        <div className={s.panel}>
          <h1>Admin Panel</h1>
          <Link href={"/admin/pages"}>Pages</Link>
        </div>
      )}
    </div>
  );
}

export default Admin;
