import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import PostDetail from './components/pages/PostDetail';
import Login from './components/pages/Login';
import UserProfile from './components/pages/UserProfile';
import Authors from './components/pages/Authors';
import CreatePost from './components/pages/CreatePost';
import EditPost from './components/pages/EditPost';
import AuthorPost from './components/pages/AuthorPosts';
import Dashboard from './components/pages/Dashboard';
import Logout from './components/pages/Logout';
import CategoryPost from './components/pages/CategoryPost';
import Register from './components/pages/Register';
import DeletePost from './components/pages/DeletePost'

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="posts/:postID" element={<PostDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="create" element={<CreatePost />} />
        <Route path="authors" element={<Authors />} />
        <Route path="posts/users/:id" element={<AuthorPost />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="posts/:id/edit" element={<EditPost />} />
        <Route path="posts/:id/delete" element={<DeletePost />} />
        <Route path="logout" element={<Logout />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="posts/categories/:category" element={<CategoryPost />} />
        <Route path="*" errorElement={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
