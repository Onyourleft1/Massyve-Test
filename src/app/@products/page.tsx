"useClient";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./@card/page";
import "./style.scss";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}/Products/get`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div id="card_p_container">
        {products.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
