import { useEffect, useState } from "react";

function Comments({c, currentUser, handleDelete}){
    const [user, setUser] = useState([])
    // const [likes, setLikes] = useState(c.likes)


    useEffect(() => {
        fetch(`/user/${c.user_id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    function deleteComment(){
        fetch(`comments/${c.id}`, {
            method: "DELETE",
        })
        handleDelete(c.id)
    }

    let me = "angpace13@gmail.com"

    // function likeComment(e){
    //     e.preventDefault()
    //    fetch(`comment/${c.id}`, {
    //     method: "PATCH",
    //     headers: { 'content-type': 'application/json' },
    //     body: JSON.stringify({
    //          likes: 0
    //         })
    //      })
    //      .then(res => res.json())
    // }
    
    if(currentUser){
        if(currentUser.id === c.user_id || currentUser.email === me ){
            return <div className="card">
            <div className="card-body">
             <p><strong>{user.name}</strong></p>
             <p>{c.content}</p>
             <button className="btn btn-outline-secondary" onClick={deleteComment}>delete</button>
             </div>
          </div> 
        }
    }
    
    return( 
    <div className="card">
       <div className="card-body">
        <p><strong>{user.name}</strong></p>
        <p>{c.content}</p>
        </div>
     </div> 
    )
}

export default Comments;