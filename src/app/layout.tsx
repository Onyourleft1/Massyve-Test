"use client";

import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import Logout from "@/components/Logout";

export const LoginContext = React.createContext();
export const UserContext = React.createContext();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const tkn = Cookie.get("token");
    if (tkn) {
      axios
        .post(`${process.env.NEXT_PUBLIC_BACK_URL}/Users/getLoginInfo`, {
          token: tkn,
        })
        .then((resp) => {
          setUser(resp.data);
          setLogin(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLogin(false);
      setUser({});
    }
  }, []);

  return (
    <>
      <html lang="en">
        <LoginContext.Provider value={[login, setLogin]}>
          <UserContext.Provider value={[user, setUser]}>
            <body>
              <Logout />
              {children}
            </body>
          </UserContext.Provider>
        </LoginContext.Provider>
      </html>
    </>
  );
}
