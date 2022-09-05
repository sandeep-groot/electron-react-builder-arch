export const setupUserInfoToLocalStorage = (result) => {
  localStorage.setItem("jwt", result.jwt);
  localStorage.setItem("username", result?.user?.username);
  localStorage.setItem("email", result?.user?.email);
};

export const clearUserInfoFromLocalStorage = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
};
