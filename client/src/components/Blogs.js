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

    return (
        <div>
            <h2>Check out the latest blog!</h2>
            {createBlogCards}
        </div>
    )
}

export default Blogs;