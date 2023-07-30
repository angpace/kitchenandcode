import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { BlogCardContainer, CardDate, CardTitle, CardPreview, CardLikes, Container } from "./BlogCardElements";

function BlogCard ({b, currentUser, handleDelete, rerender}) {
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false)
    // const [editForm, setEditForm] = useState({})
    const [postRecipe, setPostRecipe] = useState(false)
    const [recipe, setRecipe] = useState({
        title: "",
        ingredients: [],
        method: [],
        blog_id: b.id,
        photo: ""
    })
  
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

    function handleChange(e) {
    const { name, value } = e.target 
    if (name === "ingredients" || name === "method") {
        const valueArray = value.split("\n").filter((str) => str.trim() !== "");
        setRecipe({ ...recipe, [name]: valueArray });
      } else {
        setRecipe({ ...recipe, [name]: value });
      }
    }

    function handleSubmit(e) {
        e.preventDefault()
           fetch('/recipes', {
           method: 'POST',
           headers: { 'content-type': 'application/json' },
           body: JSON.stringify({
            title: recipe.title,
            ingredients: recipe.ingredients,
            blog_id: b.id,
            method: recipe.method,
            photo: recipe.photo
           })
        })
           .then(r => {
             if (r.status === 200){
               r.json()
               .then(data => rerender(data))
           }
           else if (r.status === 422) {
               r.json()
               .then(data => console.log(data.error))
           }}
            )
       }

    let me = currentUser && currentUser.email === "angpace13@gmail.com"

    return (
    
                    
                   <Container>
                   {me?
                    <div>
                         <button onClick={deletePost}>Delete</button>
                         <button onClick={() => setEdit(!edit)}>Edit</button>
                         <button onClick={() => setPostRecipe(!postRecipe)}>Add Recipe</button>
                         </div>
                        :
                        <></>
                     }
                     {postRecipe? 

                     <div>
                         <form onSubmit={handleSubmit}>
                          <input className='short_input'
                              onChange={handleChange}
                              placeholder="Title"
                              name="title"
                          />
                          <textarea
                                className='short_input'
                                onChange={handleChange}
                                placeholder="Ingredients (one per line)"
                                name="ingredients"
                            />
                            <textarea
                                className='short_input'
                                onChange={handleChange}
                                placeholder="Method (one step per line)"
                                name="method"
                            /> 
                          <input className='short_input'
                              onChange={handleChange}
                              placeholder="Photo"
                              name="photo"
                          />
                          <button type="submit">Post Recipe</button>
                      </form> 
                     </div>

                     :

                     <></>

                     }
                        <BlogCardContainer onClick={() => getBlogPost(b)}>
                            <CardTitle>{b.title}</CardTitle>
                            <CardDate>{b.date}</CardDate>
                            <CardPreview>{b.preview}</CardPreview>
                            <CardLikes>{b.likes} ❤️</CardLikes>
                        </BlogCardContainer>    
                        
                    </Container>
            
             
       
       
    )
}

export default BlogCard;