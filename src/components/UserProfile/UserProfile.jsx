import { useState } from "react";
import UserInfo from "./UserInfo";
export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  function handleChangeName() {
    setUser({ ...user, name: "Zhenya" });
  }

  function handeIncreaseAge() {
    setUser((user) => {
      return { ...user, age: user.age + 1 };
    });
  }

  function handleToggleActivity() {
    setUser((user) => ({ ...user, isActive: !user.isActive }));
  }

  return (
    <>
      <h1>Профиль пользователя</h1>
      <UserInfo user={user} />
      <button onClick={handleChangeName}>Сменить имя</button>
      <button onClick={handeIncreaseAge}>Увеличить возраст</button>
      <button onClick={handleToggleActivity}>Переключить активность</button>
    </>
  );
}
