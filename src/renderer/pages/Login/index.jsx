import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../thunks/userThunk';

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jwt, error } = useSelector((state) => {
    return state?.user;
  });

  useEffect(() => {
    if (jwt && error === undefined) {
      navigate('/user', { replace: true });
    }
  }, [jwt, error, navigate]);

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      identifier: e?.target?.identifier.value,
      password: e?.target?.password.value,
    };

    dispatch(login(payload))?.then((res) => {
      if (res?.payload?.user?.confirmed) {
      }
    });
  };
  return (
    <>
      <h2 className="mt-5 mb-5">User Login</h2>
      <div className="m-auto p-2" style={{ maxWidth: '50%' }}>
        <form onSubmit={onLoginSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="identifier" className="form-label">
              Username or Email address
            </label>
            <input
              type="text"
              name="identifier"
              className="form-control"
              id="identifier"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
