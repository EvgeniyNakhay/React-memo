import { useState } from "react";
import CartItem from "./CartItem";

export default function GoodsBasket() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  function handleIncreaseCount(id) {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  }

  function handleRemoveItem(id) {
    setCart(
      cart.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function handleEmptyBasket() {
    setCart([]);
  }

  return (
    <>
      <h1>Корзина товаров</h1>
      <ul>
        {cart.map((item) => {
          return <CartItem listItem={cart} />;
        })}
      </ul>
      <button onClick={handleEmptyBasket}>Очистить корзину</button>
    </>
  );
}
