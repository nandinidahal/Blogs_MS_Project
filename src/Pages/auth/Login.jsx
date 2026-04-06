import React from "react";
import Form from "./compontents/Form";
import axios from "axios";
import { baseurl } from "../../config";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const baseurl=import .meta.env.VITE_BASE_URL
     const navigate = useNavigate();
      const handleLogin= async (data) => {
    try {
       const response = await axios.post(
      `${baseurl}/login`,// this is another way but even better
      data,
    );
      // const response = await axios.post(baseurl  + '/login',data
        // `${baseurl}/login`,data
      // ); //backend give this link
    // console.log(response);
    //
    if (response.status === 200) {
      localStorage.setItem('token',response.data.token);
      navigate("/");
    } else {
      alert("login faileded");
    }
    } catch (error) {
      alert (error?.response?.data?.message || "Something went wrong")
    }
  }
  return (
    <>
    
    <Form type='Login' onSubmit={handleLogin}/>
    </>
  );
};

export default Login;
