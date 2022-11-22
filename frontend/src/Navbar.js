import React, { useState } from "react"
import { AiFillCodepenCircle } from "react-icons/ai"
import { Link, NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const Navbar = () => {
  let navigate = useNavigate()
  const [user, setUser] = useState("")

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/v1/logout")
      if (res.data.success) {
        localStorage.removeItem("token")
        toast.success(res.data.message)
        setUser("")
        navigate("/")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="top-0 flex items-center justify-between w-full p-10 tracking-wide siteHeader h-14">
      <div className="flex items-center ">
        <div className="text-4xl bold text- p-14 hover:cursor-pointer">
          <AiFillCodepenCircle />
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
            className="p-4 ml-4 hover:text-lime-200 hover:cursor-pointer"
            to="/"
          >
            Home
          </NavLink>
        </div>
      </div>
      {user ? (
        <Link
          to="/login"
          onClick={handleLogout}
          className="hover:text-lime-200 hover:cursor-pointer mr-28"
        >
          Logout
        </Link>
      ) : (
        <div className="flex justify-between">
          <Link
            to="/login"
            className="pr-4 hover:cursor-pointer hover:text-lime-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => console.log("Registered")}
            className="mr-28 hover:cursor-pointer hover:text-lime-200"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
