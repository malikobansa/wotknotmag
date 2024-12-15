import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ category, title, postID, description, thumbnail, authorID}) => {
  const shortDescription = description ? (description.length > 145 ? description.substr(0, 145) + '...' : description) : "No description available.";
  const postTitle = title ? (title.length > 30 ? title.substr(0, 100) + '...' : title) : "No title";

  return (
    <article className='post'> 
      <h2 className='post__title'>{postTitle}</h2>
      <img src={thumbnail} className='post__thumbnail' alt={title} />
      <div className='post__content'>
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
          <p className='post__content'>{shortDescription}</p>
        </Link>
        <div className='post__footer'>
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
