"use client";

import React, { useEffect, useState, createContext } from "react";
import Cookie from "js-cookie";
import { LoginProvider } from "@/context/LoginContext";
import { UserProvider } from "@/context/UserContext";
import Login from "./@login/page";
import "./style.scss";
import Products from "./products/page";
import axios from "axios";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  return (
    <main id="main_container">
      <LoginProvider>
        <UserProvider>
          <Login />
        </UserProvider>
      </LoginProvider>
    </main>
  );
}
