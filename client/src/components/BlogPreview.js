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
            <div >
              <h1 className="blog_title">Blogs</h1>
            </div>
            <div className="previews">
                {blogPreviews}
            </div>
            
        </div>
    )
}

export default BlogPreview;