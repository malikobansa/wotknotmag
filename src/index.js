import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage'
import Home from './components/pages/Home'
import PostDetail from './components/pages/PostDetail'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import UserProfile from './components/pages/UserProfile'
import Authors from './components/pages/Authors'
import CreatePost from './components/pages/CreatePost'
import EditPost from './components/pages/EditPost'
import AuthorPost from "./components/pages/AuthorPosts"
import Dashboard from './components/pages/Dashboard';
import Logout from './auth/Logout';
import CategoryPost from './components/pages/CategoryPost'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
        {index: true, element: <Home/>},
        {path: "posts/postID", element: <PostDetail />},
        {path: "signup", element: <SignUp />},
        {path: "login", element: <Login />},
        {path: "create", element: <CreatePost/>},
        {path:"authors", element: <Authors/>},
        {path: "posts/users/:id", element: <AuthorPost/>},
        {path: "profile/:id", element: <UserProfile/>},
        {path:"posts/:id/edit", element: <EditPost/>},
        {path:"logout", element:<Logout/>},
        {path:"myposts/:id", element: <Dashboard/>},
        {path: "poss/categories/:category", element:<CategoryPost/>}
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

