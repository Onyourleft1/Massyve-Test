"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./style.scss";
import Logout from "@/components/Logout";
import LoginContext from "@/context/LoginContext";
import UserContext from "@/context/UserContext";
import Cookie from "js-cookie";

function Products() {
  const [products, setProducts] = useState([]);
  const { login, setLogin } = useContext(LoginContext);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}/Products/get`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
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
  }, [setLogin, setUser]);

  return (
    <div>
      <h1>Products</h1>
      <div id="card_p_container">
        {products.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </div>
      <Logout />
    </div>
  );
}

export default Products;
