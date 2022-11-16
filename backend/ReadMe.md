**API documentation**

1.  CD into "server folder"
2.  Next `run npm install to install all dependencies`
3.  create a dotenv file
4.  fill up the environment variables

>     CONNECTIONSTRING = //mongodb-connection string
>
> JWT_SECRET = "enter your jwt secret here"
> PORT = 5000
> NODE_ENV =Development

5.  Run `npm run server` in your terminal from the root of the folder
6.  server will be started on `http://localhost:5000` at default
7.  All api routes starts with `http://localhost:5000`
8.  open the routes folder to know the specific url path for each request
9.  Lastly, check the models to know the type of data and the required user input data required for each route and request.
10. I am available to assist if needed.

## ALL API ROUTES

**USER ROUTES**

1.  ##### GET USER PROFILE ROUTE `http://localhost:5000/me`
2.  ##### GET A USER ROUTE `http://localhost:5000/user/:slug`
3.  ##### SEARCH USER ROUTE `http://localhost:5000/user/search`
4.  ##### GET ALL SUBSCRIBERS ROUTE `http://localhost:5000/:username/blogs`
5.  ##### UPDATE USER ROUTE `http://localhost:5000/user/profile`
6.  ##### DELETE USER ROUTE `http://localhost:5000/user/:slug`

**BLOG ROUTES**

1.  ##### GET ALL BLOGS ROUTE `http://localhost:5000/blogs`
2.  ##### GET A BLOG ROUTE `http://localhost:5000/blog/:slug`
3.  ##### SEARCH BLOG ROUTE `http://localhost:5000/blogs/search`
4.  ##### GET USER BLOGS ROUTE `http://localhost:5000/:username/blogs`
5.  ##### ADD BLOG ROUTE `http://localhost:5000/blog`
6.  ##### UPDATE A BLOG ROUTE `http://localhost:5000/blog/:slug`
7.  ##### DELETE BLOG ROUTE `http://localhost:5000/blog/:slug`
8.  ##### DELETE BLOG BY ADMIN ROUTE `http://localhost:5000/admin/blog/:slug`
