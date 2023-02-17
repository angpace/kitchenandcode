import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PostBlog from "./PostBlog";

function Blogs ({currentUser}) {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch("/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const createBlogCards = blogs.map((b) => { 
        return ( < BlogCard b={b} key={b.id} /> )
    })


    return (
        <div>
            {currentUser? 
            
            <PostBlog />
            :
            <></>
            }
            <h2>See whats new!</h2>
            <div className="blogContainer">
             {createBlogCards}
            </div>
        </div>
    )
}

export default Blogs;