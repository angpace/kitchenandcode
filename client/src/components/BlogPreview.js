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
            <div className="main-container">
            <div class="heading">
                                <h1 class="heading__title">Check out recent Blog Posts!</h1>
                                <p class="heading__credits"><a class="heading__link" href="https://www.linkedin.com/in/angpace/
                                ">by Angela Pace</a></p>
                            </div>
            {blogPreviews}
            </div>
        </div>
    )
}

export default BlogPreview;