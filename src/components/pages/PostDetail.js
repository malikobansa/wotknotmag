import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5923c983e11d4d01a29b697669f485a4`)
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.articles[postID]; // Use postID to access the correct post
        setPost(foundPost);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch post:", error);
        setLoading(false);
      });
  }, [postID]);

  if (loading) return <div>Loading...</div>;

  if (!post) return <div>Post not found</div>;

  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <p className='post__footer'><strong>Author:</strong> {post.author}</p>
          <div className='post-detail__buttons'>
            <Link to={`/posts/${postID}/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/posts/${postID}/delete`} className="btn sm danger">Delete</Link>
          </div>
          <h1>{post.title}</h1>
          {post.urlToImage && (
            <div className='post-detail__thumbnail'>
              <img src={post.urlToImage} alt={post.title} />
            </div>
          )}
          <p>{post.description}</p>
        </div>
      </div>
    </section>
  );
}

export default PostDetail;
