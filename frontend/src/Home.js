import React, { useEffect, useState } from "react"
import PostForm from "./PostForm"
import Timeline from "./Timeline"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import UserNavbar from "./UserNavBar"

const Home = () => {
  const [posts, setPosts] = useState([])

  const [user, setUser] = useState({})

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
      console.log(response.data.data)
      setUser(response.data.data)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const fetchPost = async () => {
        try {
          let response = await axios.get("/api/v1/posts")
          //console.log(response.data.posts)
          setPosts(response.data.posts)
        } catch (error) {
          console.log(error)
        }
      }
      fetchPost()
    }, 1000)
  }, [])

  return (
    <>
      {user?.username ? <UserNavbar user={user} /> : <Navbar />}{" "}
      {user?.username ? (
        <div className="flex flex-col items-center h-screen mx-96">
          <PostForm user={user} />
          <div>
            <h3 className="h-8 mt-3 font-semibold rounded-lg w-400 ">
              Timeline
            </h3>
            <Timeline posts={posts} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen mt-3 font-semibold rounded-lg mx-96 w-400 ">
          <h3 className="text-3xl font-extrabold text-yellow-600">Timeline</h3>
          <Timeline posts={posts} />
        </div>
      )}
    </>
  )
}

export default Home
