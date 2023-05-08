import { useState, useEffect } from "react";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import Notify from "./components/Notify";

const App = () => {
  const user = localStorage.getItem("user");

  return <div>{user ? <Blogs /> : <Login />}</div>;
};

export default App;
