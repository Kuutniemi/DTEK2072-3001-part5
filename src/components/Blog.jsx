import { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blogi }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [blog, setBlog] = useState(blogi);

  const handleAddLike = () => {
    blogService
      .updateBlog(blog.id, { ...blog, likes: blog.likes + 1 })
      .then((res) => {
        // console.log("RES: ", res);
        setBlog(res);
      });
  };

  const handleDelete = () => {
    const id = blog.id;
    window.confirm(`Delete ${blog.title} by ${blog.author}?`);
    blogService.deleteBlog(id);

    // just for now
    window.location.reload();
  };

  // normaalisti käytän tailwind tms mut nyt selvittänee tällä
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        Title: {blog.title}{" "}
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "hide" : "show"}
          </button>
          <button
            style={{ backgroundColor: "pink", padding: "5px" }}
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
      {showDetails && (
        <div>
          <p>URL: {blog.url}</p>
          <p>
            Likes: {blog.likes} <button onClick={handleAddLike}>like</button>
          </p>
          <p>Author: {blog.author}</p>
          <p>Added by: {blog.user?.name}</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
