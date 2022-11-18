**API documentation**

1.  CD into each folder; thus "backend " and "frontend "
2.  Next `run npm install to install all dependencies`
3.  create a dotenv file
4.  fill up the environment variables

> MONGODB_URI = //mongodb-connection string
>
> JWT_SECRET = "enter your jwt secret here"
> PORT = 5000

1.  Run `npm run server` in your terminal from the root of the folder
2.  server will be started on `http://localhost:5000` at default
3.  All api routes starts with `http://localhost:5000`
4.  open the routes folder to know the specific url path for each request
5.  Lastly, check the models to know the type of data and the required user input data required for each route and request.
6.  I am available to assist if needed.

## ALL API ROUTES

**AUTH ROUTES**

1.  ##### REGISTER USER ROUTE `http://localhost:5000/regsiter`
2.  ##### LOGIN USER ROUTE `http://localhost:5000/login`
3.  ##### LOGOUT ROUTE `http://localhost:5000/logout`

**USER ROUTES**

1.  ##### GET ALL USERS ROUTE `http://localhost:5000/userS`
2.  ##### UPDATE USER ROUTE `http://localhost:5000/user/update/:slug`
3.  ##### DELETE USER ROUTE `http://localhost:5000/user/:slug`

**POST ROUTES**

1.  ##### GET ALL POSTS ROUTE `http://localhost:5000/posts`
2.  ##### GET A POST ROUTE `http://localhost:5000/post/:slug`
3.  ##### CREATE POST ROUTE `http://localhost:5000/post`
4.  ##### UPDATE A POST ROUTE `http://localhost:5000/post/:slug`
5.  ##### DELETE POST ROUTE `http://localhost:5000/post/:slug`
