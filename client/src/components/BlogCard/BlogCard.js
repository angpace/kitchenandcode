import { useState } from "react";
import { useNavigate} from "react-router-dom";

function BlogCard ({b, currentUser, handleDelete, handleUpdate}) {
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false)
    // const [editForm, setEditForm] = useState({})

    function getBlogPost (b) {
        navigate(`/${b.id}`)
    }

    function deletePost (e){
        e.preventDefault()
        fetch(`blogs/${b.id}`, {
            method: "DELETE",
        })
        handleDelete(b.id)
    }

    // function editPost (e){
    //     e.preventDefault()
    //     fetch(`blogs/${b.id}`, {
    //         method: "PATCH",
    //         headers: {'Content-Type' : 'application/json' },
    //         body: JSON.stringify(
    //             editForm )})    
    //             .then(res => res.json())
    //             .then(data => handleUpdate(data))
            
    //         }

    let me = currentUser && currentUser.email === "angpace13@gmail.com"

    return (
     <center>
                    {me?
                    <div>
                         <button onClick={deletePost}>Delete</button>
                         <button onClick={() => setEdit(!edit)}>Edit</button>
                         </div>
                        :
                        <></>
                     }
                   <div class="card mb-3" style={{maxWidth: "80%", backgroundColor: "#fffef2"}} onClick={() => getBlogPost(b)}>
                    <div>      
                        <div class="card-body">
                            <h5 class="card-title">{b.title}</h5>
                            <p class="card-text">{b.preview}</p>
                            <p class="card-text"><small class="text-muted">{b.date}</small></p>
                        </div>
                        
                    </div>
                    </div>

       </center>                
       
       
    )
}

export default BlogCard;