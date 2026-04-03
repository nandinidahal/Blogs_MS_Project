import React from 'react'

const Form = (props) => {
  return (
    <div>
      <div className="p-4 mx-auto max-w-xl bg-white mt-10 shadow-md rounded-2xl">
        
        <h2 className="text-3xl text-slate-900 font-bold">
          {props.type} Blogs
        </h2>

        {/* ✅ Grid Layout */}
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
            />
          </div>

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
            />
          </div>

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Subtitle
            </label>
            <input
              type="text"
              placeholder="Enter Subtitle"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
            />
          </div>

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Category
            </label>
            <input
              type="text"
              placeholder="Enter Category"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
            />
          </div>

          <div>
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              File
            </label>
            <input
              type="file"
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 text-sm outline-0 transition-all"
            />
          </div>

          {/* ✅ Full width */}
          <div className="md:col-span-2">
            <label className="text-sm text-slate-900 font-medium mb-2 block">
              Message
            </label>
            <textarea
              placeholder="Enter Message"
              rows="6"
              className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"
            ></textarea>
          </div>

          {/* ✅ Full width button */}
          <div className="md:col-span-2">
            <button
              type="button"
              className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
            >
              Send Blog
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Form