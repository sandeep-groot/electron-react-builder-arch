// import { useEffect } from "react";

export const SetPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Home";

    case "/login":
      return "Login";

    case "/registration":
      return "Sign Up";

    default:
  }
};
