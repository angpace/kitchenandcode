import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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
        <>
            <div>
              <h1 className="blog_title">Blogs</h1>
            </div>
            <div className="previews">
                {blogPreviews}
            </div>
            
        </>
    )
}

export default BlogPreview;