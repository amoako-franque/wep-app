import React from "react"
import { AiFillCodepenCircle } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  let user = false
  return (
    <div className="top-0 flex items-center justify-between w-full p-10 text-lg font-semibold tracking-wide siteHeader text-slate-50 h-14">
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
          {user && (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
              className="p-4 ml-4 hover:cursor-pointer "
              to="/post"
            >
              Post
            </NavLink>
          )}
        </div>
      </div>
      {user ? (
        <Link
          to="logout"
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
