import { Routes, Route } from 'react-router-dom'
import Home  from './Pages/blog/Home';
import Register from './Pages/auth/Register';
import  AddBlog  from './Pages/blog/AddBlog';

import Login from './Pages/auth/Login.jsx';
import EditBlog from './Pages/blog/EditBlog.jsx';
import SingleBlog from './Pages/blog/SingleBlog.jsx';
// import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit/:id" element={<EditBlog/>} />
         <Route path="/blog/:id" element={<SingleBlog/>} />
      </Routes>
    </>
  );
}

export default App
