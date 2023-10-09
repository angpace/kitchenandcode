import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function PostComment({currentUser, id, handleCommentUpdate}){
    const [comment, setComment] = useState({
        email: "",
        content: "",
        blog_id: id
    })



    function handleComment(e){
        const { name, value } = e.target 
        setComment({...comment, [name]: value })
    }

    function submitComment(e){
        e.preventDefault()
        fetch("/comments", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
           body: JSON.stringify({
            content: comment.content,
            blog_id: id,
            user_id: currentUser.id
           })
        })
        .then(res => res.json())
        .then(data => handleCommentUpdate(data))
        toast.success("Thank you for your comment!")

    }

    return (
        <>
        <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
        {currentUser? 

            <form onSubmit={submitComment}>
                    <br/>
                    <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" 
                                className="form-label">Comment
                            </label>
                        <textarea className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            name="content"
                            placeholder="Write your comment here!"
                            onChange={handleComment}
                            >
                        </textarea>
                        <br/>
                    <button type="submit" className="btn btn-outline-secondary">Post</button>
            
            </div>
        </form>
        
    :
    <form onSubmit={submitComment}>
                    <div className="mb-3">
                        <br/>
                            </div>
                            <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" 
                                        className="form-label">Comment
                                    </label>
                                <textarea className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    name="content"
                                    placeholder="To make a comment you have to be subscribed and signed in."
                                    onChange={handleComment}
                                    readOnly
                                    >
                                </textarea>
                                <br/>
                    <Link style={{textDecoration: "none", color: "black"}} to="/login" >Go to login →</Link>
                    </div>
                </form>}
         </>
    )
}

export default PostComment;