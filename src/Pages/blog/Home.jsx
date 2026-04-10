import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { baseurl } from "../../config";
import axios from "axios";
const Home = () => {
  const [blogs, setBlogs] = useState([]); // if you want data to be like in multiple then response comes in arry so []  and if onluy one then in the form of object
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseurl}/blog`);
    // console.log(response.data);
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Layout>
      {/* // need to add margin t because navbar is fixed so  */}
      {/* <h1 className="text-2xl font-bold text-center mt-40">this is children in homepage</h1>
         <h1 className="text-2xl font-bold text-center mt-40">this is  second children in homepage</h1> */}
      <div className="flex flex-wrap mt-10 justify-center space-x-5  ">
        {blogs.length > 0 &&
          blogs.map((blog) => {
            return <Card blog={blog} />;
          })}
        {/* <Card type="First Blog" description="hello1 " />
        {/* <Card type="Second Blog" description="hello2" />
        <Card type="Third Blog" description="hello3" />
        <Card type="Fourth Blog" description="hello4" />
        <Card type="Fifth Blog" description="hello5" /> */}
      </div>
    </Layout>
  );
};

export default Home;
