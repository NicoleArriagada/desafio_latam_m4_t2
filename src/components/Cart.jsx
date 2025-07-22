import { useState } from "react";
import { pizzaCart } from "../helpers/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div className="container mt-4">
      <h3>Carrito de Compras</h3>
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between border p-3 mb-2"
        >
          <img src={item.img} alt={item.name} width="80" />
          <span className="text-capitalize">{item.name}</span>
          <span>${item.price.toLocaleString("es-CL")}</span>
          <div>
            <button
              className="btn btn-outline-danger btn-sm me-2"
              onClick={() => decrease(item.id)}
            >
              -
            </button>
            <span>{item.count}</span>
            <button
              className="btn btn-outline-success btn-sm ms-2"
              onClick={() => increase(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <h4>Total: ${total.toLocaleString("es-CL")}</h4>
      <button className="btn btn-success mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
