import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
        {children}

{/*       
      <footer/> */}
    </div>
  )
}

// export default Layout;
// src/components/layout/Layout.jsx
// import React from "react";
// import Navbar from "../navbar/Navbar";

// const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Fixed navbar */}
//       <Navbar />

//       {/* Main content */}
//       {/* becayuse nav bar is fixed so need to add */}
//       <main className="flex-1 pt-20 px-4">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;