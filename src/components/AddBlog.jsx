import blogService from "../services/blogs";

const AddBlog = ({ setBlogs, setNotify, setShowForm, blogs }) => {
  // Tässä teen kokoeilumielessä eri tavalla formin staten kuin login formi
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
        setShowForm(false);
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
        <button type="reset" onClick={() => setShowForm(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
