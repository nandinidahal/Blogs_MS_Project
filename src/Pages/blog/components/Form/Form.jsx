import React, { useState } from "react";

const Form = (props) => {
  const { type, onSubmit } = props;
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value, // for single if multiple than e,target.files only
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    // console.log('form submmit');
  };
  console.log(data);
  return (
    <div>
      <div className="p-4 mx-auto max-w-xl bg-white mt-10 shadow-md rounded-2xl">
        <h2 className="text-3xl font-bold  text-emerald-600">
          {props.type} Blogs
        </h2>

        <form
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5"
          onSubmit={handelSubmit}
        >
          {/* <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block ">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
            />
          </div> */}

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Enter Title"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              required
            />
          </div>

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              onChange={handleChange}
              placeholder="Enter Subtitle"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
            />
          </div>

          {/* <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Category
            </label>
            <input
              type="text"
               name='category'
               onChange={handleChange}
              placeholder="Enter Category"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
             required
            />
          </div> */}
          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Category
            </label>

            <select
              name="category"
              onChange={handleChange}
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              required
            >
              <option value="">Select Category</option>
              <option value="tech">Tech</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              File
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 text-sm outline-0 transition-all"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Description
            </label>
            <textarea
              placeholder="Enter Message"
              name="description"
              onChange={handleChange}
              rows="6"
              className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="text-white  bg-emerald-600 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
            >
              Send Blog
            </button>
            {/* {props.type === "AddBlog" ? (
            <Link to="/blog/login" style={{color:'blue'}}>Go to login</Link>
          ) : (
            <Link to="/blog/register">Go to register</Link>
          )} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
