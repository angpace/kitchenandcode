import { useState } from 'react';

function PostBlog ({rerender, currentUser}) {
    const [newPost, setNewPost] = useState({
        title: "",
        author: "",
        preview: "",
        paragraph_one: "",
        paragraph_two: "",
        paragraph_three: "",
        date: "",
        feature: "",
        image_one: "",
        category: "",
    })

    function handleChange(e) {
        const { name, value } = e.target 
        setNewPost({ ...newPost, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
           fetch('/blogs', {
           method: 'POST',
           headers: { 'content-type': 'application/json' },
           body: JSON.stringify({
            title: newPost.title,
            author: currentUser.name,
            preview: newPost.preview,
            paragraph_one: newPost.paragraph_one,
            paragraph_two: newPost.paragraph_two,
            paragraph_three: newPost.paragraph_three,
            date: newPost.date,
            feature: newPost.feature,
            image_one: newPost.image_one,
            category:  newPost.category,
            likes: 0
           })
        })
           .then(r => {
             if (r.status === 200){
               r.json()
               .then(data => rerender(data))
           }
           else if (r.status === 422) {
               r.json()
               .then(data => alert.show(data.error))
           }}
            )
       }
       

    return (
        <div className='blog_post'>
            <h2>Post a New Blog</h2>   
            <form onSubmit={handleSubmit}>
                          <input className='short_input'
                              onChange={handleChange}
                              placeholder="Blog Title"
                              name="title"
                          />
                          <input className='short_input'
                              onChange={handleChange}
                              placeholder="Preview"
                              name="preview"
                          />
                          <input className='short_input'
                              onChange={handleChange}
                              placeholder="Date"
                              name="date"
                          />
                          <input className='short_input'
                              onChange={handleChange}
                              placeholder="Feature"
                              name="feature"
                          />
                          <input className='short_input'
                              onChange={handleChange}
                              placeholder="image"
                              name="image_one"
                          />
                           <input className='short_input'
                              onChange={handleChange}
                              placeholder="Category"
                              name="category"
                          />
                          <input className='lrg_input'
                              onChange={handleChange}
                              placeholder="Intro"
                              name="paragraph_one"
                          />
                          <input className='lrg_input'
                              onChange={handleChange}
                              placeholder="Body"
                              name="paragraph_two"
                          />
                          <input className='lrg_input'
                              onChange={handleChange}
                              placeholder="Conclusion"
                              name="paragraph_three"
                          />
                          <button type="submit">Post Blog</button>
                      </form> 
        </div>
    )
}

export default PostBlog;

