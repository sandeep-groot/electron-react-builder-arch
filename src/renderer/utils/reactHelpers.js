import { useSelector } from "react-redux";

export const isUser = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useSelector((state) => state?.user);
  const jwt = localStorage.getItem("jwt");
  return Boolean(user?.username) || Boolean(user?.error) || Boolean(jwt);
};
