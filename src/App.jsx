import { Routes, Route } from 'react-router-dom'
import Home  from './Pages/blog/Home';
import Register from './Pages/auth/Register';
import  AddBlog  from './Pages/blog/AddBlog';

import Login from './Pages/auth/Login.jsx';
// import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Routes>
    </>
  );
}

export default App
