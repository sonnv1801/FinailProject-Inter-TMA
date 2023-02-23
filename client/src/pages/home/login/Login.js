import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions/user.action';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <>
      <div className="main">
        <form className="login" action="#" onSubmit={handleLogin}>
          <div className="title">Wellcome!</div>
          <p className="title-input">Username</p>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p className="title-input">Password</p>
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control"
              placeholder="your password"
              id="form-password"
            />
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-eye"></i>
            </span>
          </div>

          <div
            className="d-flex mb-5 align-items-center"
            data-selected="true"
            data-label-id="0"
          >
            <span className="ml-auto">
              <a href="#!" className="forgot-pass">
                Remember me
              </a>
            </span>
            <label className="switch">
              <input type="checkbox" />
              <span classv="slider round"></span>
            </label>
          </div>
          <button type="submit" className="btn btn-danger">
            LOGIN
          </button>
          <Link to={'/register'}>
          <button type="button" className="btn btn-danger">
            REGISTER
          </button>
        </Link>
        <p className="forgot">you forgot password?</p>
        </form>
        
      </div>
    </>
  );
}

export default Login;
