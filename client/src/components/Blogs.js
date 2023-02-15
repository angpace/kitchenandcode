import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function Blogs () {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const createBlogCards = blogs.map((b) => { 
        return ( < BlogCard b={b} key={b.id} /> )
    })

    console.log(blogs)

    return (
        <div>
            <h2>See whats new!</h2>
            <div className="blogContainer">
             {createBlogCards}
            </div>
        </div>
    )
}

export default Blogs;