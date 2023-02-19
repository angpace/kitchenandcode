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
        <div>
            <button onClick={addLikesToPost}>❤️ {blogPost.likes}</button>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.author}</p>
            <img src={blogPost.feature} />
            <p>{blogPost.paragraph_one}</p>
            <p>{blogPost.paragraph_two}</p>
            <img src={blogPost.image_one} />
            <p>{blogPost.paragraph_three}</p>
        </div>
    )
}

export default BlogLay;