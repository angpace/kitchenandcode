import { useEffect, useState } from "react";

function Comments({c, currentUser, handleDelete}){
    const [user, setUser] = useState([])

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

    if(currentUser){
        if(currentUser.id === c.user_id){
            return <div className="card">
            <div className="card-body">
             <p><strong>{user.name}</strong></p>
             <p>{c.content}</p>
             <button onClick={deleteComment}>delete</button>
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