// import React from 'react'
// import Layout from '../../components/layout/Layout'
// import Form from './components/Form/Form'

// const EditBlog = () => {
//   return (
//     <div>
//       <Layout>
//         <Form type='Edit'/>
//       </Layout>
//     </div>
//   )
// }

// export default EditBlog




import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/Form/Form";
import axios from "axios";
import { baseurl } from "../../config";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  console.log("EDIT ID:", id);
  const navigate = useNavigate();
 const [blog, setBlog] = useState(null);

  // 1. GET EXISTING BLOG DATA
  useEffect(() => {
     console.log("EDIT ID:", id);
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseurl}/blog/${id}`);
        setBlog(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, [id]);

  // 2. UPDATE BLOG
  const handleUpdate = async (data) => {
    // try {
    //   const res = await axios.patch(
    //     `${baseurl}/blog/${id}`,
    //     data,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: localStorage.getItem('token'),
            
    //       },
    //     }
    try {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("description", data.description);
    formData.append("category", data.category);

    if (data.image) {
      formData.append("image", data.image);
    }

    const res = await axios.patch(
      `${baseurl}/blog/${id}`,
      formData,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
      );
      // console.log(localStorage.getItem("token"));

      if (res.status === 200) {
        navigate("/");
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      {/* {blog && ( */}
      
      <Form
        type="Edit"
        onSubmit={handleUpdate}
        initialData={blog}
      />
      {/* )} */}
    </Layout>
  );
};

export default EditBlog;








// import React from 'react'
// import Layout from '../../components/layout/Layout'
// import Form from './components/Form/Form'
// import { baseurl } from "../../config";
// import axios from "axios";
// import { useNavigate, useParams } from 'react-router-dom';


// const EditBlog = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); 

//   const handleUpdateBlog = async (data) => {
//     try {
//       const response = await axios.patch(
//         `${baseurl}/blog${id}`, 
//         data,
        
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             "Authorization": `localStorage.getItem("token")`, 
//           },
//         }
//       );

//       if (response.status === 200) {
//         navigate("/");
//       } else {
//         alert("Something went wrong");
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message);
//     }
//   };
//   const fetchBlogs = async () => {
//     const response = await axios.get(`${baseurl}/blog/${id}`);
//     // console.log(response.data);
//     if (response.status === 200) {
//       setBlog(response.data.data);
//     }
//   };
//   useEffect(() => {
//     fetchBlogs();
//   }, []);
//   return (
//     <div>
//       <Layout>
//         <Form type='Edit' onSubmit={handleUpdateBlog} />
//       </Layout>
//     </div>
//   )
// }

// export default EditBlog
