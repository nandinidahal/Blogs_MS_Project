import React, { useState } from "react";
import { Link } from "react-router-dom";
const Form = (props) => {
  const { type, onSubmit } = props;
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    // setData(e.target.value);
    const { name, value } = e.target;
    // console.log(name,value);
    setData({
      ...data,
      [name]: value,
    });
  };
  // console.log(data);

  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    // console.log('form submmit');
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form
          className="w-full max-w-md p-6 rounded-2xl shadow-md "
          onSubmit={handelSubmit}
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-black/100 ">
            {props.type} here to continue...
          </h1>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          {props.type === "Register" && (
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="username"
                id="username"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="username"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>
          )}

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5"
          >
            {props.type}
          </button>
          {props.type === "Register" ? (
            <Link to="/login" style={{color:'blue'}}>Go to login</Link>
          ) : (
            <Link to="/register">Go to register</Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
