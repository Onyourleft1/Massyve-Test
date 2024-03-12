"use client";
import { LoginContext, UserContext } from "@/app/layout";
import axios from "axios";
import React, { useContext } from "react";
import Cookie from "js-cookie";
import "./Logout.scss";

function Logout() {
  const [login, setLogin] = useContext(LoginContext);
  const [user, setUser] = useContext(UserContext);
  const logout = (e) => {
    e.preventDefault();
    axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/Users/logout`).then(() => {
      setLogin(false);
      setUser({});
      Cookie.remove("token");
    });
  };
  return (
    <div id="logout_container">
      {login ? <button onClick={logout}>Logout</button> : <></>}
    </div>
  );
}

export default Logout;
