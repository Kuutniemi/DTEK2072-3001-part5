import { useEffect, useState } from "react";
import Blog from "./Blog";

import blogService from "../services/blogs";
import userService from "../services/userService";
import Notify from "./Notify";

const Blogs = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [blogs, setBlogs] = useState([]);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  // Tässä teen kokoeilumielessä eri tavalla formin kuin login form
  const handleAddPost = (event) => {
    event.preventDefault();
    const { title, author, url } = event.target;
    const newBlog = {
      title: title.value,
      author: author.value,
      url: url.value,
    };
    blogService
      .addBlog(newBlog)
      .then((res) => {
        // console.log("RES: ", res);
        setNotify({
          message: `a new blog ${res.title} by ${res.author} added`,
          color: "green",
        });
        setBlogs(blogs.concat(res));
      })
      .catch((err) => {
        setNotify({ message: "Error, try again later", color: "red" });
      });
  };

  return (
    <div>
      {/* Logged in user */}
      <div>
        <h2>
          Logged in as - {user.name}{" "}
          <button onClick={userService.removeUser}>logout</button>
        </h2>
      </div>

      {notify && (
        <Notify
          message={notify.message}
          color={notify.color}
          onClose={() => setNotify(null)}
        />
      )}

      {/* Add new blog */}
      <div>
        <h2>Add new blog</h2>
        <form onSubmit={handleAddPost}>
          <p>
            title:
            <input type="text" name="title" />
          </p>
          <p>
            author:
            <input type="text" name="author" />
          </p>
          <p>
            url:
            <input type="text" name="url" />
          </p>
          <button type="submit">Add new</button>
        </form>
      </div>

      {/* Blogs */}
      <div>
        <h2>blogs</h2>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
