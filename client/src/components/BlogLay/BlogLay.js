import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments';
import PostComment from '../PostComment';
import { BlogLayContainer, FeatureContain, Feature, BlogContent, JumpToRecipe, ButtonContainer, BlogTitle, SecondImgContainer, SecondImage } from './BloglayElements';
import Recipe from '../Recipes/Recipe';
import LoadingPage from '../LoadingPage/LoadingPage'

function BlogLay ({currentUser}){
    let { id } = useParams();
    const [blogPost, setBlogPost] = useState([])
    const [recipe, setRecipe] = useState([])
    const [likes, setLikes] = useState(blogPost.likes)
    const [isLiked, setIsLiked] = useState(false)
    const [leaveAComment, setLeaveAComment] = useState(false)
    const [updatedComments, setUpdatedComments] = useState([])


    useEffect(() => {
        fetch(`blogs/${id}`)
          .then(res => res.json())
          .then(data => {
            setBlogPost(data);
            if (data.recipe !== undefined) {
              setRecipe(data.recipe);
            }
            if (data.comments !== undefined) {
              setUpdatedComments(data.comments);
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

    function handleCommentUpdate(data){
      setUpdatedComments((prevComments) => [data, ...prevComments]);
    }

    function handleDelete(id){
      let filteredComment = updatedComments.filter((c) => c.id !== id)
      setUpdatedComments(filteredComment)
    }

    

    let displayComments = ["This post has no comments yet."]


    if (blogPost && blogPost.comments !== undefined){
      displayComments = updatedComments.map((c) => {
        return  <Comments key={c.id} c={c} currentUser={currentUser} handleDelete={handleDelete}/> }) 
      }
     
    return(
        // <ConstructionPage>
        //      <ImageContainer>
        //         <Image src={blogPost.feature}></Image>
        //         </ImageContainer>
        //     <ContentContainer>
        //         <Content>{blogPost.title}</Content>
        //         <br/>
        //         <BodyContainer>
        //         {recipe? 

               
        //         <ButtonContainer>
        //         <JumpToRecipe onClick={() => scrollToSection("recipe")}>Jump to recipe</JumpToRecipe>
        //         </ButtonContainer>
              
        //         :
        //         <></>
        //     }
                
        //         <p>{blogPost.paragraph_one}</p>
        //         <p>{blogPost.paragraph_two}</p>
        //         <img className="feature_image" alt="imageOne" src={blogPost.image_one} />
        //         <p>{blogPost.paragraph_three}</p>
        //         {recipe? 
                
        //         <section id="recipe">
        //         <Recipe recipe={recipe}/>
        //         </section>

        //         :
        //         <></>
        //     }
                
        //         <p>Like this post? Show some love <br/> or leave a comment below!
        //             <br/>
        //             <button className="like_btn" onClick={addLikesToPost}>
        //                 <i className=
        //                  {isLiked? 
        //                     "fa-regular fa-solid fa-heart"
        //                     :
        //                     "fa-regular fa-heart"
        //                  }
        //                  >
        //                     </i> {likes}</button>
        //             </p>
        //             <button type="button" className="btn btn-outline-secondary"  onClick={() => setLeaveAComment(!leaveAComment)}>Leave a Comment</button>
        //              {leaveAComment?
                     
        //                 <>
        //                     <PostComment id={id} currentUser={currentUser} handleCommentUpdate={handleCommentUpdate}/>
        //                 </>
        //                 :
        //                 <></>
        //              }
        //              <br/>
        //              <>
        //              <br/>
        //                 {displayComments}
        //              </>
        //         </BodyContainer>
        //         </ContentContainer>
        // </ConstructionPage>
        <BlogLayContainer>
          <FeatureContain>
            <Feature src={blogPost.feature} /> 
          </FeatureContain>
          <BlogContent>
            <BlogTitle>{blogPost.title}</BlogTitle>
            {recipe? 

               
         <ButtonContainer>
         <JumpToRecipe className="btn btn-outline-secondary" onClick={() => scrollToSection("recipe")}>Jump to recipe</JumpToRecipe>
         </ButtonContainer>
      
         :
         <></>
     }
            <p>{blogPost.paragraph_one}</p>
            <p>{blogPost.paragraph_two}</p>
            <SecondImgContainer>
               <SecondImage src={blogPost.image_one}/>
            </SecondImgContainer>
            <p>{blogPost.paragraph_three}</p>
            {recipe? 
                
                        <section id="recipe">
                        <Recipe recipe={recipe}/>
                         </section>
        
                       :
                        <></>
                  }

            <p>Like this post? Show some love or leave a comment below!
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
                              <PostComment id={id} currentUser={currentUser} handleCommentUpdate={handleCommentUpdate}/>
                          </>
                          :
                          <br/>
                      }
                     
                     {displayComments && displayComments.length > 0 ? 
                     
                     <>
                     
                        <br/>
                        <p>Comments</p>
                        {displayComments}
                        <br/>
                      </>

                        :
                        
                        <br/>
                        
                    }
                  
          </BlogContent>
         
        </BlogLayContainer>
    )
}

export default BlogLay;