export default function CartItem({ title, increaseCount, removeItem, id }) {
  console.log("CartItem");

  const handleRemoveItem = () => {
    removeItem(id);
  };
  const handleIncreaseCount = () => {
    increaseCount(id);
  };
  return (
    <li>
      {title}
      <button onClick={handleIncreaseCount(id)}>+1</button>
      <button onClick={handleRemoveItem(id)}>Удалить</button>
    </li>
  );
}
