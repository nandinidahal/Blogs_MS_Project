import React from "react";
import Form from "./compontents/Form";
import axios from "axios";
import { baseurl } from "../../config";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handelRegister = async (data) => {
    try {
      const response = await axios.post(
      `${baseurl}/register`,// this is another way but even better
      data,
    ); //backend give this link
    console.log(response);
    //
    if (response.status === 201) {
      navigate("/login");
    } else {
      alert("registration failed");
    }
    } catch (error) {
      alert (error?.response?.data?.message)
    }
  };
  return (
    <div>
      <Form type="Register" onSubmit={handelRegister} />
    </div>
  );
};

export default Register;

//{{base_url}}/api/user/register
//https://react30.onrender.com/
// console.log("SUCCESS:", response.data);
