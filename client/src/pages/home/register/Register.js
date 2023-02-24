import React from 'react';
import './style.css';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { registerUser } from '../../../redux/actions/user.action';
import { useDispatch } from 'react-redux';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email:email,
      password: password,
    };
    registerUser(newUser, dispatch, navigate);
  };
  const handleShow = () => {
    const x = document.getElementById("form-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  };
  const handleShowinform = () => {
    const x = document.getElementById("confirm-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  };
  
  return (
    <>
      <div className="register-page">
        <form className="register" action="#" onSubmit={handleRegister}>
          <div className="title">Register!</div>
          <p className="title-input">Username</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {setUsername(e.target.value)}}
            />
          </div>
          <p className="title-input">Email</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your email"
              aria-label="email"
              aria-describedby="basic-addon1"
              onChange={(e) => {setEmail(e.target.value)}}

            />
          </div>
          <p className="title-input">Password</p>
          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="your password"
              id="form-password"
              onChange={(e) => {setPassword(e.target.value)}}

            />
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-eye" onClick={handleShow}></i>
            </span>
          </div>
          <p className="title-input">Confirm Password</p>
          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="your password"
              id="confirm-password"
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-eye" onClick={handleShowinform}></i>
            </span>
          </div>
          
         
            <button type="submit" className="btn btn-danger">
              DONE
            </button>

        </form>
      </div>
    </>
  );
}

export default Register;
