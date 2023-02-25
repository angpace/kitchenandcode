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


    const filteredBlogs = blogs.filter((b) => b.category.toLowerCase().includes(search.toLowerCase()))

    const createBlogCards = filteredBlogs.map((b) => { 
        return ( < BlogCard b={b} key={b.id} /> )
    })

    function rerender (data){
        console.log("I was triggered!")
        setBlogs([...blogs, data])
    }

    return (
        <div>
            {currentUser? 
            
            <PostBlog rerender={rerender} currentUser={currentUser}/>
            :
            <></>
            }
            <div className="heading">
                <h2 className="heading__title">See whats new!</h2>
            </div>
            <div className="search">
            <input className="bar" onChange={(e) => setSearch(e.target.value)} placeholder="Sort by Category"></input>
            <button>Go</button>
            </div>
            <div className="blogContainer">
             {createBlogCards}
            </div>
        </div>
    )
}

export default Blogs;