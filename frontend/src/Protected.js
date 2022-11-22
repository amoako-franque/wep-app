import React, { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

function ProtectedRoute(props) {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const getUser = async () => {
    try {
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      if (response.data.success) {
        setUser(response.data.data)
      } else {
        localStorage.clear()
        navigate("/login")
      }
    } catch (error) {
      localStorage.clear()
      navigate("/login")
    }
  }

  useEffect(() => {
    if (!user) {
      getUser()
    }
  }, [user])

  if (localStorage.getItem("token")) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute
