import React from "react";
// import Navbar from '../../components/navbar/Navbar'
import Layout from "../../components/layout/Layout";
import Form from "./components/Form/Form";


const AddBlog = () => {
  return (
    <div>
      <Layout>
        <Form type='Create'/>
      </Layout>
    </div>
  );
};

export default AddBlog;
