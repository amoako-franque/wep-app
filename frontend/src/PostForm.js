import React from "react"

const PostForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log("submitted")
      }}
    >
      <div className="mt-6">
        {" "}
        <textarea
          id="content"
          className="w-[900px] p-4 bg-slate-50  border border-gray-800 rounded-lg outline-none resize-none min-h-[250px]"
          placeholder="Whats on your mind ..."
        />
      </div>
      <div className="flex justify-end">
        {" "}
        <button
          className="w-20 h-8 font-semibold bg-orange-400 rounded-lg hover:bg-red-300"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default PostForm
