import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';
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
      {/* <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit} style={{ width: "50%" }}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="Login-main-container">
          <div className="logo-image-div">
            <img src="./images/Logo.png" alt="Logo-Im" className="Logo-Image" />
          </div>
          <div className="Welcome-div">
            {/* <img src="" alt="" /> */}
            <h1 className="Welcome-heading">Welcome Back</h1>
            <h4 className="Welcome-para">
              {' '}
              Enter your login details to access <br />
              your account
            </h4>
          </div>
          <div className="Login-heading-div">
            <h1 className="user-login">User Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="From">
            <div className="d-flex d-inline">
              <img src=".images/IconUser.png" alt="iicon" />
              <input type="text" placeholder="Email" className="FormInput" />
            </div>

            <input type="text" placeholder="Password" className="FormInput" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
