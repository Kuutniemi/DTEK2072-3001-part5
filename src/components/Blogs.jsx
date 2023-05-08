import { useEffect, useState } from "react";
import Blog from "./Blog";

import blogService from "../services/blogs";
import userService from "../services/userService";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div>
      <h2>
        Logged in as - {user.username}{" "}
        <button onClick={userService.removeUser}>logout</button>
      </h2>
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
