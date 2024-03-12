"use client";

import { useContext } from "react";
import Login from "./@login/page";
import "./style.scss";
import { LoginContext } from "./layout";
import Products from "./@products/page";

export default function Home() {
  const [login] = useContext(LoginContext);
  return <main id="main_container">{login ? <Products /> : <Login />}</main>;
}
