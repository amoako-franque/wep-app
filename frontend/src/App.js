import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./Home"
import Login from "./Login"
import Post from "./Post"
import Register from "./Register"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </div>
  )
}

export default App