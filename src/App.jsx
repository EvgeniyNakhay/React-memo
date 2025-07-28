import { useState } from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import GoodsBasket from "./components/GoodsBasket";
import UserProfile from "./components/UserProfile/UserProfile";
function App() {
  return (
    <>
      {/* <GoodsBasket /> */}
      <TodoList />
      {/* <UserProfile /> */}
    </>
  );
}

export default App;
