import { useEffect, useState } from "react";
import PreviewCard from "./PreviewCard";

function BlogPreview ( ) {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const blogPreviews = blogs.map((b) => {
        return <PreviewCard b={b} key= {b.id}/>
    })
    
    
    return (
        <div>
            <h2>Blogs</h2>
            {blogPreviews}
        </div>
    )
}

export default BlogPreview;