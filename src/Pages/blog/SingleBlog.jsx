import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import photo1 from '../../assets/code.png'

const SingleBlog = () => {
  return (
    <div>
      <Layout>
        <div class="bg-gray-100 dark:bg-gray-800 py-8  h-screen">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    class="w-full h-full object-cover border-2 border-emerald-600"
                    src={photo1}
                    alt="Product Image"
                  />
                </div>
                <div class="flex -mx-2 mb-4">
                  <div class="w-1/2 px-2">
                    <Link to='/blog/edit'>
                    <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                     Edit
                    </button>
                    </Link>
                  </div>
                  <div class="w-1/2 px-2">
                    <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                     Delete
                    </button>
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                 Blog title:
                  <span class="text-gray-600 dark:text-gray-300">
                    Building a Clean and Dynamic Blog Page with React
                    </span>
                    <hr/>
                </h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 mt-6">
                  Today, I worked on designing a clean and responsive Single Blog page using React and Tailwind CSS. This page allows users to view full blog details along with options to edit or delete the post.
                </p>
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                      Category:
                    </span>
                    <span class="text-gray-600 dark:text-gray-300">Web Development</span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                      Publish At:
                    </span>
                    <span class="text-gray-600 dark:text-gray-300">
                     April 3, 2026
                    </span>
                  </div>
                </div>
                
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    While building my Blog Management System, I focused on improving the user experience by creating a structured and visually appealing blog detail page.

I implemented a layout that clearly separates the blog image and content, making it easy to read and navigate. The Edit and Delete buttons were added to provide quick actions for managing posts efficiently.

One of the key improvements I made was using React Router’s Link component instead of traditional anchor tags. This ensures smooth navigation without page reloads, making the application faster and more responsive.

I also used Tailwind CSS to style the page, which helped me quickly build a modern and clean UI without writing custom CSS.

This small feature helped me better understand component structure, UI design, and how real-world applications handle content display and user interaction.
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
