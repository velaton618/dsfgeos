"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./admin.module.sass";
import { setAuth } from "@/store/slices/adminSlice";

function Admin() {
  const isAuth: any = useSelector((state: any) => state.admin.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
		dispatch(setAuth(true));
	}, []);

  return <div className={s.container}>
		{ isAuth ? 
		<div className={s.login}>
			<form className={s.form}>
				<input className={s.input} placeholder="Email" type="email"/>
				<input className={s.input} placeholder="Password" type="password"/>
				<button className={s.button}>Log in</button>
			</form>
		</div>
		:
		<div className={s.panel}>

		</div> }
	</div>;
}

export default Admin;
