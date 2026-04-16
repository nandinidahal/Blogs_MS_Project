import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import photo1 from "../../assets/code.png";
import axios from "axios";
import { baseurl } from "../../config";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({}); // if you want data to be like in multiple then response comes in arry so []  and if onluy one then in the form of object
  const navigate = useNavigate();

  const DeleteBlog = async () => {
    try {
      const response = await axios.delete(`${baseurl}/blog/${id}`, {
        headers: {
          // "Content-Type":"multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      // console.log(response.data);
      if (response.status === 200) {
        // setBlog(response.data.data);
        navigate("/");
      } else {
        alert("something wrong please try again");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // const EditBlog= async()=>{
  //   try {
  //     const response = await axios.patch(`${baseurl}/blog/${id}`, {
  //       headers: {
  //         // "Content-Type":"multipart/form-data",
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     });
  //     // console.log(response.data);
  //     if (response.status === 200) {
  //       // setBlog(response.data.data);
  //       navigate("/");
  //     } else {
  //       alert("something wrong please try again");
  //     }
  //   } catch (error) {
  //     alert(error.response.data.message);
  //   }
  // };
  // }
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseurl}/blog/${id}`);
    // console.log(response.data);
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <Layout>
        <div className="bg-gray-100 dark:bg-gray-800 py-8  h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover border-2 border-emerald-600"
                    // src={photo1}
                    src={blog?.imageUrl}
                    alt="Product Image"
                  />
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    {/* <Link to="/blog/edit"> */}
                    <Link to={`/blog/edit/${id}`}>
                      <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" 
                      //  onClick={EditBlog}
                       >
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="w-1/2 px-2">
                    <button
                      className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                      onClick={DeleteBlog}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                  {/* Blog title: */}
                  {blog?.title}
                  <span className="text-gray-600 dark:text-gray-300">
                    {/* Building a Clean and Dynamic Blog Page with React */}
                    {blog?.subtitle}
                  </span>
                  <hr />
                </h2>
                {/* <p  className="text-gray-600 dark:text-gray-300 text-sm mb-4 mt-6">
                  Today, I worked on designing a clean and responsive Single Blog page using React and Tailwind CSS. This page allows users to view full blog details along with options to edit or delete the post.
                </p> */}
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Category:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {/* Web Development */}
                      {blog?.category}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      {/* Publish At: */}
                      Author:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {/* April 3, 2026 */}
                      {blog?.userId?.username}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {blog?.description}
                    {/* While building my Blog Management System, I focused on improving the user experience by creating a structured and visually appealing blog detail page.

I implemented a layout that clearly separates the blog image and content, making it easy to read and navigate. The Edit and Delete buttons were added to provide quick actions for managing posts efficiently.

One of the key improvements I made was using React Router’s Link component instead of traditional anchor tags. This ensures smooth navigation without page reloads, making the application faster and more responsive.

I also used Tailwind CSS to style the page, which helped me quickly build a modern and clean UI without writing custom CSS.

This small feature helped me better understand component structure, UI design, and how real-world applications handle content display and user interaction. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SingleBlog;
