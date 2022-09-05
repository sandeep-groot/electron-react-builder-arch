import React from 'react';
import logo from '../../../../assets/logo/e-react.png';
// import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
// import { logout } from "thunks/userThunk";
// import { isUser } from "utils/reactHelpers";
import ThemeSwitch from '../ThemeSwitch';

const NavBar = () => {
  // const _isUser = isUser();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { logo } = JSON.parse(labels);

  // const onLogoutHandler = () => {
  //   dispatch(logout())?.then((res) => {
  //     navigate('/', { replace: true });
  //   });
  // };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* <Link to={""} className="navbar-brand">
          {logo}
        </Link> */}
        <div className="" style={{ width: '40px' }}>
          <img src={logo} alt="app logo" style={{ width: '100%' }} />
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {/* {_isUser ? (
              <Link to="" className="nav-link" onClick={onLogoutHandler}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )} */}
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link" aria-current="page">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-fluid d-flex flex-row justify-content-end align-items-center gap-2">
        Theme Mode
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
