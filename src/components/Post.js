import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5923c983e11d4d01a29b697669f485a4`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.articles);
      })
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
      });
  }, []);

  return (
    <section className='posts'>
      <div className='container posts__container'>
        {
          posts.map((post, index) => (
            <PostItem 
              key={index} 
              postID={post.source.id}
              title={post.title} 
              description={post.description} 
              image={post.urlToImage} 
              url={post.url} 
              author={post.author} 
            />
          ))
        }
      </div>
    </section>
  );
}

export default Post;
