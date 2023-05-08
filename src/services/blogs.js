import axios from "axios";
const baseUrl = "/api/blogs";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addBlog = async (newBlog) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const request = await axios.post(baseUrl, newBlog, {
    headers: { Authorization: `bearer ${token}` },
  });
  return request.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, addBlog };
