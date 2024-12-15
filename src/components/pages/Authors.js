import React, { useState } from 'react'
import Avatar from '../../img/ava.jpg'
import Ava from '../../img/avatar.jpg'
import { Link } from 'react-router-dom'

const authorData = [
  {id: 1, avatar: Avatar, name: 'WOT', post: 1 },
  {id: 2, avatar: Ava, name: 'KNOT', post: 2 }
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorData);

  return (
    <section className='authors'>
      { authors.length > 0 ?
      <div className='container authors__container'>
        {
          authors.map(({id, avatar, name, post}) => {
            return <Link to={`/post/users/${id}`} className='author'>
              <div className='author__avatar'>
                <img src={avatar} alt={`Image of ${name}`}/>
              </div>
              <div className='author__info'>
                <h4>{name}</h4>
                <p>{post}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'> No User / Authors</h2> }
    </section>
  )
}

export default Authors