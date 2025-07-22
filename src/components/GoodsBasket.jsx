import { useState } from "react";

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
          return (
            <li key={item.id}>
              {item.title} (Кол-во: {item.count}){" "}
              <button onClick={() => handleIncreaseCount(item.id)}>+1</button>
              <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
            </li>
          );
        })}
      </ul>
      <button onClick={handleEmptyBasket}>Очистить корзину</button>
    </>
  );
}
