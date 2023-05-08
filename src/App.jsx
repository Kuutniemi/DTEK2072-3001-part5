import { useState, useEffect } from "react";
import Login from "./components/Login";
import Blogs from "./components/blogs";

const App = () => {
  const user = localStorage.getItem("user");

  return <div>{user ? <Blogs /> : <Login />}</div>;
};

export default App;
