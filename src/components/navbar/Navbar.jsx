import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral-primary w-full border-b border-default">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 items-center p-4">
        <Link to="/">
          <div className="flex justify-start">
            <span className="text-xl text-heading font-semibold whitespace-nowrap text-emerald-600">
              Blog
            </span>
          </div>
        </Link>
        {/* ✅ Center - Search */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="text"
              className="w-full ps-9 pe-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder="Search"
            />
          </div>
        </div>

        {/* ✅ Right - Menu */}
        <div className="flex justify-end">
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link
                to="/"
                className="text-heading hover:text-fg-brand text-emerald-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog/add"
                className="text-heading hover:text-fg-brand text-emerald-600"
              >
                Create Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-heading hover:text-fg-brand text-emerald-600"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-heading hover:text-fg-brand text-emerald-600"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
