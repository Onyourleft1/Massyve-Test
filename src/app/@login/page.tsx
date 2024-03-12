"use client";
import { useContext, useState } from "react";
import "./style.scss";
import axios from "axios";
import Cookie from "js-cookie";
import { LoginContext } from "../layout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLogin] = useContext(LoginContext);
  const login = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACK_URL}/Users/login`, {
        email: email,
        password: password,
      })
      .then((responce) => {
        Cookie.set("token", responce.data.token);
        setLogin(true);
      })
      .catch((err) => {
        console.log(err);
        setLogin(false);
      });
  };
  return (
    <div id="login_container">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
