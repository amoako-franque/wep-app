import React from "react"
import PostForm from "./PostForm"
import Timeline from "./Timeline"

const Home = () => {
  let user = true
  return (
    <>
      {" "}
      {user ? (
        <div className="flex flex-col items-center h-full bg-orange-100 mx-96">
          <PostForm />
          <Timeline />
        </div>
      ) : (
        <Timeline />
      )}
    </>
  )
}

export default Home
