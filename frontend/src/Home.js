import React, { useEffect, useState } from "react"
import axios from "axios"
import PostForm from "./PostForm"
import Timeline from "./Timeline"

const Home = () => {
  let user = true
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      const fetchPost = async () => {
        try {
          let response = await axios.get("/api/v1/posts")
          console.log(response.data.posts)
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
      {" "}
      {user ? (
        <div className="flex flex-col items-center h-screen mx-96">
          <PostForm />
          <div>
            <h3 className="h-8 mt-3 font-semibold rounded-lg w-400 ">
              Timeline
            </h3>
            <Timeline posts={posts} />
          </div>
        </div>
      ) : (
        <Timeline posts={posts} />
      )}
    </>
  )
}

export default Home
