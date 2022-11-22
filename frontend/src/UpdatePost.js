import React, { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import UserNavbar from "./UserNavBar"
import { useNavigate, useParams } from "react-router-dom"

const UpdatePost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState([])
  const [user, setUser] = useState({})
  const [formData, setFormData] = useState({
    title: post.title,
    body: post.body,
  })

  const { title, body } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !body) {
      toast.error("Please fill the title and body")
      return
    }

    const token = localStorage.getItem("token")

    try {
      const response = axios.put(
        `/api/v1/user/post/${slug}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        formData
      )
      if (response.data.success) {
        toast.success("Post updated", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        navigate(`/post/${post.slug}`)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const updatePostHandler = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    try {
      const response = await axios.put(`/api/v1/user/post/${slug}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        formData,
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
      // console.log(response.data.data)
      setUser(response.data.data)
      localStorage.setItem(user, response.data.data)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await axios.get(`/api/v1/post/${slug}`)
        //console.log(response.data)
        setFormData({
          title: response.data.post.title ? response.data.post.title : "",
          body: response.data.post.body ? response.data.post.body : "",
        })
        setPost(response.data.post)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [])

  return (
    <>
      <UserNavbar user={user} />
      <div className="flex justify-center h-screen pt-10 bg-cyan-600">
        <form onSubmit={updatePostHandler}>
          <div className="flex flex-col mt-6">
            <h3 className="mb-8 text-4xl font-extrabold text-amber-200">
              Update Post
            </h3>
            <input
              type="text"
              className="w-[600px] p-4 bg-slate-50 mb-3  border border-gray-800 rounded-lg outline-none resize-none min-h-[50px]"
              placeholder="Enter post title"
              name="title"
              id="title"
              value={title}
              onChange={onChange}
            />
            {title}

            <textarea
              name="body"
              id="body"
              value={body}
              onChange={onChange}
              className="w-[600px] p-4 bg-slate-50  border border-gray-800 rounded-lg outline-none resize-none min-h-[550px]"
              placeholder="Whats on your mind ..."
            />
            <div className="flex justify-end">
              {" "}
              <button
                className="w-20 h-8 mt-3 font-semibold rounded-lg hover:shadow-md bg-orange-4 siteHeader hover:bg-lime-900"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdatePost
