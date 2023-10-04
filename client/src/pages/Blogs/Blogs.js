import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import PostBlog from "../../components/PostBlog";
import { CarouselHeading } from "../../components/Carousel/CarouselElements";
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

                  
                    {createBlogCards}
                            
            
            </>
        )
    }
    

    return (
        <>
                {createBlogCards}
                    
        
        </>
    )
}

export default Blogs;