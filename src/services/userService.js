const getUser = () => {
  return JSON.stringify(localStorage.getItem("user"));
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  window.location.reload();
};

const removeUser = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const userService = {
  getUser,
  setUser,
  removeUser,
};

export default userService;
