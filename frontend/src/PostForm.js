import React, { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  })

  const { title, body } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const response = axios.post("/api/v1/user/post", formData)
      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        setFormData({ title: "", body: "" })
      } else {
        toast.error(response.data.message,)
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-6">
        <input
          type="text"
          className="w-[600px] p-4 bg-slate-50 mb-3  border border-gray-800 rounded-lg outline-none resize-none min-h-[50px]"
          placeholder="Enter post title"
          name="title"
          id="title"
          value={title}
          onChange={onChange}
        />

        <textarea
          name="body"
          id="body"
          value={body}
          onChange={onChange}
          className="w-[600px] p-4 bg-slate-50  border border-gray-800 rounded-lg outline-none resize-none min-h-[250px]"
          placeholder="Whats on your mind ..."
        />
      </div>
      <div className="flex justify-end">
        {" "}
        <button
          className="w-20 h-8 mt-3 font-semibold rounded-lg hover:shadow-md bg-orange-4 siteHeader hover:bg-lime-900"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default PostForm
