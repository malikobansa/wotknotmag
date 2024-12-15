import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostAuthor from '../PostAuthor';
import { DUMMY_POSTS } from '../../data';

const PostDetail = ({thumbnail, title, description}) => {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
            <PostAuthor/>
          <div className='post-detail__buttons'>
            <Link to={`/posts/:id/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/posts/:id/delete`} className="btn sm danger">Delete</Link>
          </div>
          <h1>{title}</h1>
            <div className='post-detail__thumbnail'>
              <img src={thumbnail} alt={title} />
            </div>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default PostDetail;