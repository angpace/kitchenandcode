import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogLay (){
    let { id } = useParams();
    const [blogPost, setBlogPost] = useState([])
    const [likes, setLikes] = useState(blogPost.likes)
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        fetch(`blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlogPost(data))
    }, [])

    function addLikesToPost(){
       let newLikeCount = blogPost.likes += 1
       setLikes(newLikeCount)
       setIsLiked(true)
       fetch(`/blogs/${id}`, {
        method: "PATCH",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
             likes: newLikeCount
            })
         })
    }

    return(
        <div className='blogLayContainer'>
            <div className="blogLay">
                
                <div>
                    <h1 className='blog_title' style={{textAlign: "center"}}>{blogPost.title}</h1>
                </div>
                <div>
                    <p className="author" style={{float: 'right'}}>by: {blogPost.author}</p>
                </div>
                <div>
                     <p>{blogPost.preview}</p>
                </div>
                <div className="feature">
                    <img  className="feature_image" alt="feature" src={blogPost.feature} />
                </div>
                <div className='paragraph'>
                    <p>{blogPost.paragraph_one}</p>
                </div>
                <div className='paragraph'>
                    <p>{blogPost.paragraph_two}</p>
                </div>
                <div className='side_by_side'>
                    <img className="image_one" style={{float: 'left', width: '50%'}} alt="imageOne" src={blogPost.image_one} />
                    <p style={{float: 'right', width: '40%'}}>{blogPost.paragraph_three}</p>
                </div>
                <br/>
                <div className='like_this_post'>
                    <p>Like this post? Show some love!
                    <br/>
                    <button className="like_btn" onClick={addLikesToPost}>
                        <i className=
                         {isLiked? 
                            "fa-regular fa-solid fa-heart"
                            :
                            "fa-regular fa-heart"
                         }
                         >
                            </i> {blogPost.likes}</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogLay;