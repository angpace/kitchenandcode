import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import PostBlog from "../../components/PostBlog";
import { CarouselHeading } from "../../components/Carousel/CarouselElements";
import { BlogContainer } from "../../components/Category/CategoryElements";
import { Keywords, WelcomeText, KeywordFlex} from "./BlogElements";

function Blogs ({currentUser, search}) {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch(`/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    function handleDelete(id){
        const updatedBlogsArray = blogs.filter(blog => blog.id !== id)
        setBlogs(updatedBlogsArray)
    }

    const filteredBlogs = blogs.filter((b) => b.keywords.toLowerCase().includes(search.toLowerCase()))

    const createBlogCards = filteredBlogs.map((b) => { 
        return ( < BlogCard handleDelete={handleDelete} currentUser={currentUser} b={b} key={b.id} rerender={rerender}/> )
    })

    function rerender (data){
        console.log("I was triggered!")
        setBlogs([...blogs, data])
    }

    const me = 'angpace13@gmail.com' 

    if (currentUser && me === currentUser.email){
        return (
        
            <>
                
                <PostBlog rerender={rerender} currentUser={currentUser}/>
                <BlogContainer>
                  
                    {createBlogCards}
                            
                </BlogContainer>
            </>
        )
    }
    

    return (
        <>
        {/* <WelcomeText>
                    <center>Welcome!
                        <br/>
                        Click on keywords below or browse all blogs.
                        </center>
                    </WelcomeText> */}
                {/* <KeyWordContainer>
                <Search onChange={(e) => setSearch(e.target.value)} placeholder="Search..."></Search>
                    <p>OR</p>
                    <KeywordFlex>
                        <Keywords onClick={() => setSearch("tech")}>Tech</Keywords>
                        <Keywords onClick={() => setSearch("food")}>Food</Keywords>
                        <Keywords onClick={() => setSearch("recipe")}>Recipes</Keywords>
                        <Keywords onClick={() => setSearch("")}>All</Keywords>
                    </KeywordFlex>
                    </KeyWordContainer> */}
        
        <BlogContainer>
            {/* <HeadingContainer>
                <CarouselHeading>Blog</CarouselHeading>
                </HeadingContainer> */}
                {createBlogCards}
                    
        </BlogContainer>
        </>
    )
}

export default Blogs;