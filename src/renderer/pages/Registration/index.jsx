import React from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../../thunks/userThunk';

const Registration = () => {
  const dispatch = useDispatch();

  const registrationHandler = (e) => {
    e.preventDefault();
    const payload = {
      username: e?.target?.username?.value,
      email: e?.target?.email?.value,
      password: e?.target?.password?.value,
    };

    dispatch(registration(payload))?.then((res) => {
      console.log('res :>> ', res);
    });
  };
  return (
    <>
      <h2 className="mt-5 mb-5">User Registration</h2>

      <div className="m-auto p-2" style={{ maxWidth: '50%' }}>
        <form onSubmit={registrationHandler}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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

export default Registration;
