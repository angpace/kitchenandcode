import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import PostComment from './PostComment';

function BlogLay ({currentUser}){
    let { id } = useParams();
    const [blogPost, setBlogPost] = useState([])
    const [likes, setLikes] = useState(blogPost.likes)
    const [isLiked, setIsLiked] = useState(false)
    const [leaveAComment, setLeaveAComment] = useState(false)
    // const [updatedComments, setUpdatedComments] = useState([])


    useEffect(() => {
        fetch(`blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlogPost(data))
    },[])

    console.log(id)

    function addLikesToPost(){
       let newLikeCount = blogPost.likes += 1
       setLikes(newLikeCount)
       setIsLiked(true)
       fetch(`blogs/${id}`, {
        method: "PATCH",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
             likes: newLikeCount
            })
         })
         .then(res => res.json())
         .then(data => console.log(data))
    }

    let displayComments = ["This post has no comments yet."]



    if (blogPost && blogPost.comments !== undefined){
      displayComments = blogPost.comments.map((c) => {
        return  <Comments key={c.id} c={c} /> }) 
      }
     
    return(
        <div className='blogLayContainer'>
            <div className="blogLay">
                <>
                    <h1 className='blog_title' style={{textAlign: "center"}}>{blogPost.title}</h1>
                </>
                <div style={{paddingTop: '15px'}}>
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
                            </i> {likes}</button>
                    </p>
                </div>
            </div>
            <button type="button" className="btn btn-outline-secondary"  onClick={() => setLeaveAComment(!leaveAComment)}>Leave a Comment</button>
                     {leaveAComment?
                     
                        <>
                            <PostComment id={id} currentUser={currentUser}/>
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