import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "thunks/userThunk";
import { Link, useNavigate } from "react-router-dom";
// import { isUser } from "utils/reactHelpers";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  const onLogoutHandler = () => {
    dispatch(logout())?.then((res) => {
      navigate("/", { replace: true });
    });
  };

  const onSubmitHandler = () => {};
  return (
    <div>
      <h2>User Profile</h2>

      <ul>
        <li>Username: {user?.username}</li>
        <li>Email: {user?.email}</li>
      </ul>

      <div className="container">
        <form onSubmit={onSubmitHandler}></form>

        <div style={{ marginBottom: "2rem" }}>
          <Link to="/">Home</Link>
        </div>

        <button
          type="button"
          onClick={onLogoutHandler}
          className="btn btn-primary"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
