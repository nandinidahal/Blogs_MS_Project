import React from "react";
// import Navbar from '../../components/navbar/Navbar'
import Layout from "../../components/layout/Layout";
import Form from "./components/Form/Form";
import { baseurl } from "../../config";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const AddBlog = () => {
  const navigate=useNavigate()
  const handelCreateBlog=async (data)=>{
    try {
      const response= await axios.post(`${baseurl}/blog`, data,{
      headers:{
        "Content-Type": "multipart/form-data",// because  the img doesnot go in application/json so 
        // "Content-Type":"application/json"// but axios by default it in in format only text so in that file imag doesnot go and we have to change the content-type 
        "Authorization":localStorage.getItem('token')
      }
    })
    if(response.status===201){
      navigate('/')
    }
    else{
      alert("something went wrong")
    }
    } catch (error) {
       alert ( error?.response?.data.message)
    }

  }
  return (
    <div>
      <Layout>
        <Form type='Create' onSubmit={handelCreateBlog}/>
      </Layout>
    </div>
  );
};

export default AddBlog;
// in application/jason only textfield gone and in default axios is textbut image doesnot go in content type 