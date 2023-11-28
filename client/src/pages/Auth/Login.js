import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';
import '../../styles/Login.css';
import { useAuth } from '../../context/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/login', {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || '/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className="Login-main-container " id="loginUserForm">
        <div className="textlogin">
          <img src="/images/Logo.png" className="logoImg" alt="logo"></img>
          <br />
          <br /> <br />
          <h1 className="headingLogin">WELLCOME BACK</h1>
          <p className="loginP">
            Enter your login details to access <br></br> your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="LoginFormSize">
          <div className="Login-heading-div">
            <h1 className="user-login">User Login</h1>
          </div>

          <div className="entrEmail">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div>
            <button id="login-btn" type="submit">
              LOGIN
            </button>
          </div>
          <div className=" text-center">
            <Link to="/forgot-password" className="forgot-link">
              Forgot your Password?
            </Link>
            <p className="noAccount">Don't you have Account?</p>
            <Link className="registerNow-btn" to="/Register">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
