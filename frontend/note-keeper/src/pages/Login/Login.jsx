import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';
import { Link,useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

import './Login.css'; 
import axiosInstance from '../../utils/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate =useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError("");
  
    try{
        const response = await axiosInstance.post("/login",{
          email:email,
          password:password,
        });

        if(response.data&&response.data.accessToken){
          localStorage.setItem("token",response.data.accessToken)
          navigate('/dashboard')

        }
    }catch(error){
        if(error.response && error.response.data&& error.response.data.message){
          setError(error.response.data.message);
        }else{
          setError("An unexpected error occurres. Please try again.")
        }
    }



  };

  return (
    <>
 
      <div className="login-background">
        <div className="login-container">
          <form onSubmit={handleLogin} className="login-form">
            <h4 className="login-heading">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn-primary">Login</button>
            <p className="register-link">
              Not registered yet?{" "}
              <Link to="/signup" className="signup-link">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
