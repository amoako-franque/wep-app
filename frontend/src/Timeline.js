import React from "react"
import { Link } from "react-router-dom"

const Timeline = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          aria-label="card-item-v2"
          className="flex mt-4 bg-slate-300 flex-col mb-8  hover:cursor-pointer hover:shadow-md hover:bg-slate-600 hover:text-gray-300 leading-relaxed  w-[900px] p-7  shadow-md rounded-lg"
        >
          <Link to={`/post/${post.slug}`}>
            <div className="relative flex-shrink-0  h-[250px]">
              <p className="pb-4 text-xl font-bold text-teal-600">
                {post.title}
              </p>
              <p>{post.body}</p>
            </div>
            <div className="flex items-center justify-between flex-1 gap-x-5">
              <div className="flex flex-col">
                <span className="mb-3 font-bold text-gray-400 hover:text-orange-300 text-md">
                  <span className="pr-4">Author: {post.postedBy.username}</span>
                  <br />
                  <span>Posted on: {post.createdAt}</span>
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Timeline
