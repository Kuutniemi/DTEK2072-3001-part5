import axios from "axios";
import { useState } from "react";
import userService from "../services/userService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("/api/login", {
        username,
        password,
      })
      .then((res) => {
        userService.setUser(res.data);
      });
  };

  return (
    <div>
      <h1>Login to see blogs</h1>
      <form onSubmit={handleLogin}>
        <p>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </p>
        <p>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
