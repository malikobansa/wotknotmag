import React, { useState } from 'react'
import { DUMMY_POSTS } from '../../data'
import PostItem from '../PostItem';

const CategoryPost = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section>
      {posts.length > 0 ? <div className='container posts__container'>
        {
          posts.map(({ id, thumbnail, category, title, description, authorID }) => (
            <PostItem 
              key={id} 
              postID={id}
              title={title} 
              thumbnail={thumbnail}
              category={category}
              description={description} 
              author={authorID}
            />
          ))
        }
      </div> : <h2 className='center'>No Posts Founds</h2> }
    </section>
  )
}

export default CategoryPost