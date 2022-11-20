import React from 'react'
import { Link } from "react-router-dom"

const Timeline = () => {
  return (
    <div>
      <div
        aria-label="card-item-v2"
        className="flex mt-4 flex-col hover:cursor-pointer w-[900px] p-5 bg-white shadow-sm rounded-lg"
      >
        <Link to="/login">
          <div className="relative flex-shrink-0 mb-5 h-[250px]">
            <img
              src="https://bit.ly/3zzCTUT"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute z-10 px-4 py-2 bg-white rounded-lg text-cyan-500 right-5 top-5">
              my card
            </div>
          </div>
          <div className="flex items-center justify-between flex-1 gap-x-5">
            <div className="flex flex-col">
              <h3 className="mb-3 text-lg font-bold">Karangan Beach</h3>
              <div className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-cyan-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">Labuan Bajo, Indonesia</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-100 gap-x-1 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5.34</span>
            </div>
          </div>
        </Link>
      </div>
      <div
        aria-label="card-item-v2"
        className="flex mt-4 flex-col w-[900px] p-5 bg-white shadow-sm rounded-lg"
      >
        <div className="relative flex-shrink-0 mb-5 h-[250px]">
          <img
            src="https://bit.ly/3zzCTUT"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute z-10 px-4 py-2 bg-white rounded-lg text-cyan-500 right-5 top-5">
            my card
          </div>
        </div>
        <div className="flex items-center justify-between flex-1 gap-x-5">
          <div className="flex flex-col">
            <h3 className="mb-3 text-lg font-bold">Karangan Beach</h3>
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-400">Labuan Bajo, Indonesia</span>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-100 gap-x-1 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>5.34</span>
          </div>
        </div>
      </div>
      <div
        aria-label="card-item-v2"
        className="flex mt-4 flex-col w-[900px] p-5 bg-white shadow-sm rounded-lg"
      >
        <div className="relative flex-shrink-0 mb-5 h-[250px]">
          <img
            src="https://bit.ly/3zzCTUT"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute z-10 px-4 py-2 bg-white rounded-lg text-cyan-500 right-5 top-5">
            my card
          </div>
        </div>
        <div className="flex items-center justify-between flex-1 gap-x-5">
          <div className="flex flex-col">
            <h3 className="mb-3 text-lg font-bold">Karangan Beach</h3>
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-400">Labuan Bajo, Indonesia</span>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-100 gap-x-1 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>5.34</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline