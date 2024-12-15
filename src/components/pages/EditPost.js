import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('UnCategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const modules = {
    toolbar: [
      [{'header':  [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list' : 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ['MUSIC', 'STYLE', 'CULTURE', 'VIDEO', 'MAGAZINE', 'EVENT', 'SHOP' ]

  return (
    <section className='create-post'>
      <div className='container'>
        <h2>Edit Post</h2>
        <p className='form__error-message'>
          This is an error message
        </p>
        <form className='form create-post__form'>
            <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
            <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
              {
                POST_CATEGORIES.map(cate => <option key={cate}>{cate}</option>)
              }
            </select>
              <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
              <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
              <button type='submit' className='btn primary'>Edit</button>
        </form>
      </div>
    </section>
  )
}

export default EditPost