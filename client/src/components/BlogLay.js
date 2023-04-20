import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

function BlogLay (){
    let { id } = useParams();
    const [blogPost, setBlogPost] = useState([])
    const [likes, setLikes] = useState(blogPost.likes)
    const [isLiked, setIsLiked] = useState(false)
    const [leaveAComment, setLeaveAComment] = useState(false)
    const [comment, setComment] = useState({
        email: "",
        content: "",
        blog_id: id
    })

   
    useEffect(() => {
        fetch(`blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlogPost(data))
    }, [])

    function handleComment(e){
        const { name, value } = e.target 
        setComment({...comment, [name]: value })
    }

    function submitComment(e){
        e.preventDefault()
        console.log(comment)
    }


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

    let displayComments = ["This post has no comments yet."]



    if (blogPost && blogPost.comments !== undefined){
      displayComments = blogPost.comments.map((c) => {
        return  <Comments key={c.id} c={c} /> }) 
      }
     
    return(
        <div className='blogLayContainer'>
            <div className="blogLay">
        
                <div>
                    <h1 className='blog_heading' style={{textAlign: "center"}}>{blogPost.title}</h1>
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
                <div className="feature">
                    <img className="feature_image" alt="imageOne" src={blogPost.image_one} />
                </div>
                <div className='paragraph'>
                    <p>{blogPost.paragraph_three}</p>
                </div>
                <br/>
                <div className='like_this_post'>
                    <p>Like this post? Show some love <br/> or leave a comment below!
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
            <button type="button" className="btn btn-outline-secondary"  onClick={() => setLeaveAComment(!leaveAComment)}>Leave a Comment</button>
                     {leaveAComment?
                     
                        <>
                            <form onSubmit={submitComment}>
                                <div className="mb-3">
                                    <br/>
                                        <label htmlFor="exampleFormControlInput1" 
                                            className="form-label"
                                            >Email
                                        </label>
                                        <input type="email" 
                                            name="email"
                                            className="form-control" 
                                            id="exampleFormControlInput1" 
                                            placeholder="Coming soon!"
                                            onChange={handleComment}
                                            readOnly/>
                                        <small></small>
                                        </div>
                                        <div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" 
                                                    className="form-label">Comment
                                                </label>
                                            <textarea className="form-control" 
                                                id="exampleFormControlTextarea1" 
                                                rows="3"
                                                name="content"
                                                onChange={handleComment}
                                                readOnly>
                                            </textarea>
                                            <br/>
                                        <button type="submit" className="btn btn-outline-secondary">Post</button>
                                
                                </div>
                            </form>
                        </>
                        :
                        <></>

                     }
                     <br/>
                     <>
                     <br/>
                        {displayComments}
                     </>
        </div>
    )
}

export default BlogLay;