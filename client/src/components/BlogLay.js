import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogLay (){
    let { id } = useParams();
    const [blogPost, setBlogPost] = useState([])
    const [likes, setLikes] = useState(blogPost.likes)

    useEffect(() => {
        fetch(`blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlogPost(data))
    }, [])

    function addLikesToPost(){
       let newLikeCount = blogPost.likes += 1
       setLikes(newLikeCount)
       fetch(`/blogs/${id}`, {
        method: "PATCH",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
             likes: newLikeCount
            })
         })
    }

    return(
        <div className="blogLay">
            
            <div className='title'>
                <h1 style={{float: 'left'}}>{blogPost.title}</h1>
            </div>
            <div>
            <p style={{float: 'right'}}>by: {blogPost.author}</p>
            </div>
            <div>
                <img className="feature" alt="feature" src={blogPost.feature} />
            </div>
            <div>
                <p>{blogPost.paragraph_one}</p>
            </div>
            <div>
                <p>{blogPost.paragraph_two}</p>
            </div>
            <div>
                <img className="image_one" style={{float: 'left', width: '50%'}} alt="imageOne" src={blogPost.image_one} />
                <p style={{float: 'right', width: '40%'}}>{blogPost.paragraph_three}</p>
            </div>
            <br/>
            <div>
                <p>Like this post? Show {blogPost.author} some love! <br/>
                <button onClick={addLikesToPost}>❤️ {blogPost.likes}</button>
                </p>
            </div>
        </div>
    )
}

export default BlogLay;