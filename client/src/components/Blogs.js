import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PostBlog from "./PostBlog";

function Blogs ({currentUser}) {
    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        fetch("/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    function handleDelete(id){
        const updatedBlogsArray = blogs.filter(blog => blog.id !== id)
        setBlogs(updatedBlogsArray)
    }

    const filteredBlogs = blogs.filter((b) => b.category.toLowerCase().includes(search.toLowerCase()))

    const createBlogCards = filteredBlogs.map((b) => { 
        return ( < BlogCard handleDelete={handleDelete} currentUser={currentUser} b={b} key={b.id} /> )
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
    
                <div className="search">
                      <input className="bar" onChange={(e) => setSearch(e.target.value)} placeholder="Search by Category..."></input>
                </div>
                    <div>
                        <h2 className="blog_title">Blogs</h2>
                        <div className="line-2"></div>
                    </div>
                        <div className="blogContainer">
                            {createBlogCards}
                        </div>
            </>
        )
    }
    

    return (
        
        <>
            <div className="search">
                  <input className="bar" onChange={(e) => setSearch(e.target.value)} placeholder="Search by Category..."></input>
            </div>
                <div>
                    <h2 className="blog_title" style={{paddingTop: '8%'}}>Blogs</h2>
                    <div className="line-2"></div>
                </div>
                    <div className="blogContainer" >
                        {createBlogCards}
                    </div>
        </>
    )
}

export default Blogs;