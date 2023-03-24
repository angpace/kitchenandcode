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
console.log(edit)
    return (
     <div>
                    {currentUser? 
                    <div>
                         <button onClick={deletePost}>Delete</button>
                         <button onClick={() => setEdit(!edit)}>Edit</button>
                         </div>
                        :
                        <></>
                     }
                    <section className="cards">
                        <article className="card card--1" onClick={() => getBlogPost(b)}>
                        <div className="card__info-hover">
                            <div className="card__clock-info">
                                <span className="card__time">♡ {b.likes}</span>
                            </div>
                        </div>
                        <div  className="card__img"></div>
                            <img alt="feature" src={b.feature} className="card__img--hover"/>
                        <div className="card__info">
                            <span className="card__category">{b.category}</span>
                            <h3 className="card__title">{b.title}</h3>
                            <span className="card__by">{b.date}</span>
                            <br/>
                            <p className="card__by">{b.preview}</p>
                        </div>
                        </article>
                     </section>  
                       
         </div>
       
    )
}

export default BlogCard;