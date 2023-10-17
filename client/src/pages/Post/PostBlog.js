import { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PostContainer, Form } from './PostElements';

function PostBlog ({currentUser}) {
    const form = useRef()
    const [newPost, setNewPost] = useState({
        title: "",
        preview: "",
        paragraph_one: "",
        paragraph_two: "",
        paragraph_three: "",
        date: "",
        feature: "",
        image_one: "",
        category: "",
        featured: "",
        keywords: ""
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
            user_id: currentUser.id,
            preview: newPost.preview,
            paragraph_one: newPost.paragraph_one,
            paragraph_two: newPost.paragraph_two,
            paragraph_three: newPost.paragraph_three,
            date: newPost.date,
            feature: newPost.feature,
            image_one: newPost.image_one,
            category:  newPost.category,
            featured: newPost.featured,
            keywords: newPost.keywords,
            likes: 0
           })
        })
           .then(r => {
             if (r.status === 200){
               r.json()
               .then(data => console.log(data))
               .then(toast.success("Blog posted successfully"))
           }
           else if (r.status === 422) {
               r.json()
               .then(data => console.log(data.error))
           }}
            )
       }
       

    return (
        
        <PostContainer>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <h2>Post a New Blog</h2>   
            <Form ref={form} onSubmit={handleSubmit}>
                          <input
                              onChange={handleChange}
                              placeholder="Blog Title"
                              name="title"
                          />
                          <input 
                              onChange={handleChange}
                              placeholder="Preview"
                              name="preview"
                          />
                          <input 
                              onChange={handleChange}
                              placeholder="Date"
                              name="date"
                          />
                          <input 
                              onChange={handleChange}
                              placeholder="Feature"
                              name="feature"
                          />
                          <input 
                              onChange={handleChange}
                              placeholder="image"
                              name="image_one"
                          />
                           <input 
                              onChange={handleChange}
                              placeholder="Category"
                              name="category"
                          />
                          <textarea
                            rows="7"
                              onChange={handleChange}
                              placeholder="Intro"
                              name="paragraph_one"
                          />
                          <textarea
                            rows="7"
                              onChange={handleChange}
                              placeholder="Body"
                              name="paragraph_two"
                          />
                          <textarea 
                            rows="7"
                              onChange={handleChange}
                              placeholder="Conclusion"
                              name="paragraph_three"
                          />
                           <textarea 
                                rows="7"
                              onChange={handleChange}
                              placeholder="featured"
                              name="featured"
                          />
                           <textarea
                                rows="7"
                              onChange={handleChange}
                              placeholder="Keywords"
                              name="keywords"
                          />
                          <button type="submit">Post Blog</button>
                      </Form> 
        </PostContainer>
    )
}

export default PostBlog;

