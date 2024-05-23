import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ title, postID, description, image, url, author }) => {
  const shortDescription = description ? (description.length > 145 ? description.substr(0, 100) + '...' : description) : "No description available.";
  const postTitle = title ? (title.length > 30 ? title.substr(0, 100) + '...' : title) : "No title";

  return (
    <div className='post'>
      <h2 className='post__title'>{postTitle}</h2>
      {image && <img src={image} className='post__thumbnail' alt={title} />}
      <div className=''>
        <Link to={`/posts/${postID}`}>
          <p className='post__content'>{shortDescription}</p>
          <p className='post__footer'><strong>Author:</strong> {author}</p>
        </Link>
        <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
}

export default PostItem;
