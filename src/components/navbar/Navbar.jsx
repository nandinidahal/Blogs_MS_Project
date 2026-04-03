import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-neutral-primary w-full border-b border-default">
      
      {/* ✅ Grid layout for perfect center alignment */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 items-center p-4">

        {/* ✅ Left - Logo */}
        <div className="flex justify-start">
          <span className="text-xl text-heading font-semibold whitespace-nowrap">
            Blog
          </span>
        </div>

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
              <a href="/" className="text-heading hover:text-fg-brand">
                Home
              </a>
            </li>
            <li>
              <a href="/blog/add" className="text-heading hover:text-fg-brand">
                Add Blogs
              </a>
            </li>
            <li>
              <a href="/login" className="text-heading hover:text-fg-brand">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="text-heading hover:text-fg-brand">
                Register
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar