import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import PostDetail from './components/pages/PostDetail';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import UserProfile from './components/pages/UserProfile';
import Authors from './components/pages/Authors';
import CreatePost from './components/pages/CreatePost';
import EditPost from './components/pages/EditPost';
import AuthorPost from './components/pages/AuthorPosts';
import Dashboard from './components/pages/Dashboard';
import Logout from './auth/Logout';
import CategoryPost from './components/pages/CategoryPost';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="posts/:postID" element={<PostDetail />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="create" element={<CreatePost />} />
        <Route path="authors" element={<Authors />} />
        <Route path="posts/users/:id" element={<AuthorPost />} />
        <Route path="profile/:id" element={<UserProfile />} />
        <Route path="posts/:id/edit" element={<EditPost />} />
        <Route path="logout" element={<Logout />} />
        <Route path="myposts/:id" element={<Dashboard />} />
        <Route path="posts/categories/:category" element={<CategoryPost />} />
        <Route path="*" errorElement={<ErrorPage />} />1`1`
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
