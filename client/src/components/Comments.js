import { useEffect, useState } from "react";

function Comments({c}){
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`/user/${c.user_id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])


    return(
    <div class="card">
        <div class="card-body">
        <p><strong>{user.name}</strong></p>
        <p>{c.content}</p>
        </div>
    </div>
    )
}

export default Comments;