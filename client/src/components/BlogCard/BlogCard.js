import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { BlogCardContainer, CardDate, CardTitle, CardPreview, CardLikes, Container } from "./BlogCardElements";

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
    
                    
                   <Container onClick={() => getBlogPost(b)}>
                   {me?
                    <div>
                         <button onClick={deletePost}>Delete</button>
                         <button onClick={() => setEdit(!edit)}>Edit</button>
                         </div>
                        :
                        <></>
                     }
                        <BlogCardContainer>
                            <CardTitle>{b.title}</CardTitle>
                            <CardDate>{b.date}</CardDate>
                            <CardPreview>{b.preview}</CardPreview>
                            <CardLikes>{b.likes} likes</CardLikes>
                        </BlogCardContainer>    
                        
                    </Container>
            
             
       
       
    )
}

export default BlogCard;