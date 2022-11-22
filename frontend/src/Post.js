import React, { useEffect, useState } from "react"

import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Navbar from "./Navbar"
import UserNavbar from "./UserNavBar"

const Post = () => {
  const { slug } = useParams()

  const [post, setPost] = useState([])

  const [user, setUser] = useState({})

  const handleDeleteHandler = async (e) => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.delete(`/api/v1/user/post/${slug}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      return await response.json()
    } catch (err) {
      return console.log(err)
    }
  }

  const getUser = async () => {
    const token = localStorage.getItem("token")

    if (token) {
      const response = await axios.get(
        "/api/v1/get-user-by-id",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      //console.log(response.data.data)
      setUser(response.data.data)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await axios.get(`/api/v1/post/${slug}`)
        console.log(response.data)
        setPost(response.data.post)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [])

  return (
    <>
      {user?.username ? <UserNavbar user={user} /> : <Navbar />}{" "}
      <li
        aria-label="card-item-v2"
        className="flex  bg-gray-400 mt-36 mx-96 flex-col mb-8   hover:shadow-md leading-relaxed  w-[900px] p-7  shadow-md rounded-lg"
      >
        <div className="relative flex-shrink-0  h-[250px]">
          <p className="p-2 mb-3 text-xl font-bold text-teal-400 bg-gray-900 ">
            {post.title}
          </p>
          <p className="pl-3"> {post.body}</p>
        </div>
        <div className="flex items-center justify-between flex-1 gap-x-5">
          <div className="flex flex-col">
            <div className="mb-3 font-bold text-gray-800 text-md">
              <span className="pr-4">Author: {post?.postedBy?.username}</span>
              <br />
              <span>Posted on: {post.createdAt}</span>
            </div>
          </div>
          <div>
            <Link
              to={`/user/post/${post.slug}`}
              className="mb-3 font-bold text-gray-800 text-md"
            >
              <span className="pr-4 text-lg font-extrabold blue-600 font- ">
                Update
              </span>
            </Link>
            <span
              className="text-lg font-extrabold text-red-700 hover:cursor-pointer "
              onClick={handleDeleteHandler}
            >
              Delete
            </span>
          </div>
        </div>
      </li>
    </>
  )
}

export default Post
