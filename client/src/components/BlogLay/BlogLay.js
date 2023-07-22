import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments';
import PostComment from '../PostComment';
import { ConstructionPage, Content, ContentContainer, Image, ImageContainer } from '../Construction/UnderCElements';
import { BodyContainer, JumpToRecipe, ButtonContainer } from './BloglayElements';
import Recipe from '../Recipes/Recipe';
import LoadingPage from '../LoadingPage/LoadingPage'

function BlogLay ({currentUser}){
    let { id } = useParams();
    const [blogPost, setBlogPost] = useState([])
    const [recipe, setRecipe] = useState([])
    const [likes, setLikes] = useState(blogPost.likes)
    const [isLiked, setIsLiked] = useState(false)
    const [leaveAComment, setLeaveAComment] = useState(false)
    // const [updatedComments, setUpdatedComments] = useState([])


    useEffect(() => {
        fetch(`blogs/${id}`)
          .then(res => res.json())
          .then(data => {
            setBlogPost(data);
            if (data.recipe !== undefined) {
              setRecipe(data.recipe);
            }
          });
      }, []);

      if (blogPost.length < 1){
        return <LoadingPage/>
      }

      function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

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
    }

    let displayComments = ["This post has no comments yet."]


    if (blogPost && blogPost.comments !== undefined){
      displayComments = blogPost.comments.map((c) => {
        return  <Comments key={c.id} c={c} /> }) 
      }
     
    return(
        <ConstructionPage>
             <ImageContainer>
                <Image src={blogPost.feature}></Image>
                </ImageContainer>
            <ContentContainer>
                <Content>{blogPost.title}</Content>
                <br/>
                <BodyContainer>
                {recipe? 

               
                <ButtonContainer>
                <JumpToRecipe onClick={() => scrollToSection("recipe")}>Jump to recipe</JumpToRecipe>
                </ButtonContainer>
              
                :
                <></>
            }
                
                <p>{blogPost.paragraph_one}</p>
                <p>{blogPost.paragraph_two}</p>
                <img className="feature_image" alt="imageOne" src={blogPost.image_one} />
                <p>{blogPost.paragraph_three}</p>
                {recipe? 
                
                <section id="recipe">
                <Recipe recipe={recipe}/>
                </section>

                :
                <></>
            }
                
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
                </BodyContainer>
                </ContentContainer>
        </ConstructionPage>
    )
}

export default BlogLay;