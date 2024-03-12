import "./style.scss";

function Card({ product }: { product: Object }) {
  return (
    <div id="card_container">
      <h3>Name: {product.name}</h3>
      <h3>Price: {product.price}$</h3>
      <h3>
        Description: <p>{product.description}</p>
      </h3>
    </div>
  );
}

export default Card;
