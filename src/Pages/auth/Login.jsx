import React from "react";
import Form from "./compontents/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
     const navigate = useNavigate();
  const handelLogin= async (data) => {
    try {
      const response = await axios.post(
      "https://react30.onrender.com/api/user/login",
      data,
    ); //backend give this link
    // console.log(response);
    //
    if (response.status === 200) {
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
    
    <Form type='Login' onSubmit={handelLogin}/>
    </>
  );
};

export default Login;
