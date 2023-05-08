import { useEffect, useState } from "react";
import Blog from "./Blog";

import blogService from "../services/blogs";
import userService from "../services/userService";
import Notify from "./Notify";
import AddBlog from "./AddBlog";

const Blogs = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [blogs, setBlogs] = useState([]);
  const [notify, setNotify] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

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
      {showForm ? (
        <AddBlog
          setBlogs={setBlogs}
          setNotify={setNotify}
          setShowForm={setShowForm}
          blogs={blogs}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add new blog</button>
      )}

      {/* Blogs */}
      <div>
        <h2>blogs</h2>
        {blogs.map((blog) => (
          <Blog key={blog.id} blogi={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
