import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogContainer} from "./BlogElements";

function Blogs ({currentUser, search, blogs, setBlogs}) {



    function handleDelete(id){
        const updatedBlogsArray = blogs.filter(blog => blog.id !== id)
        setBlogs(updatedBlogsArray)
    }

    const filteredBlogs = blogs.filter((b) => b.keywords.toLowerCase().includes(search.toLowerCase()))

    if(filteredBlogs.length < 1){
        return ( <p>No blogs with those keywords</p>)
    }

    const createBlogCards = filteredBlogs.map((b) => { 
        return ( < BlogCard handleDelete={handleDelete} currentUser={currentUser} b={b} key={b.id} rerender={rerender}/> )
    })

    function rerender (data){
        setBlogs([...blogs, data])
    }
    

    return (
        <BlogContainer>
                {createBlogCards}
        </BlogContainer>
    )
}

export default Blogs;