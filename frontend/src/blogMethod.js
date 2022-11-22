export const updateBlog = async (blog, token, slug) => {
  let updateBlogEndpoint

  if (isAuth() && isAuth().status === "admin") {
    updateBlogEndpoint = `${API}/blog/${slug}`
  } else if (isAuth() && isAuth().status === "user") {
    updateBlogEndpoint = `${API}/user/blog/${slug}`
  }

  try {
    const response = await fetch(`${updateBlogEndpoint}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: blog,
    })
    handleResponse(response)
    return await response.json()
  } catch (err) {
    return console.log(err)
  }
}
