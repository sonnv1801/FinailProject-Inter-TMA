import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/actions/user.action';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const messerr = useSelector((state) => state.defaultReducer.login.error);
  if (messerr === true) {
    console.log('Sao la v con?');
  } else {
    console.log('O tuyet voi');
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // event.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
    console.log(newUser);
  };
  const handleShow = () => {
    const x = document.getElementById('form-password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  return (
    <>
      <div className="main">
        <form className="login" action="#" id="form-1" onSubmit={handleLogin}>
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
            {messerr === false ? `` : `Xin hãy nhập lại!`}
          </p>

          <div className="title">Wellcome!</div>
          <p className="title-input">Username</p>
          <div className="input-group mb-3">
            <input
              type="text"
              for="fullname"
              className="form-control"
              placeholder="your username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* <span className='form-mess'>alo</span> */}
          </div>

          <p className="title-input">Password</p>
          <div className="input-group mb-3">
            <input
              type="password"
              for="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control"
              placeholder="your password"
              id="form-password"
            />
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-eye" onClick={handleShow}></i>
            </span>
            {/* <span className='form-mess'>alo</span> */}
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
        </form>
      </div>
    </>
  );
}

export default Login;
