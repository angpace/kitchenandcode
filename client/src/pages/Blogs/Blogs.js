import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogContainer, BlogHeading, Icons, Icon} from "./BlogElements";


function Blogs ({currentUser, search, blogs, setBlogs, setSearch}) {



    function handleDelete(id){
        const updatedBlogsArray = blogs.filter(blog => blog.id !== id)
        setBlogs(updatedBlogsArray)
    }

    const filteredBlogs = blogs.filter((b) => b.keywords.toLowerCase().includes(search.toLowerCase()))

    if(filteredBlogs.length < 1){
       
    }

    const createBlogCards = filteredBlogs.map((b) => { 
        return ( < BlogCard handleDelete={handleDelete} currentUser={currentUser} b={b} key={b.id} rerender={rerender}/> )
    })

    function rerender (data){
        setBlogs([...blogs, data])
    }
    
    // function iconFilter(data){
    //     setSearch([...search,data])
    // }

    return (
        <BlogContainer>
            <BlogHeading>
                <h3>All Blogs</h3>
                {/* <Icons>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/ingredients.png" onClick={(e) => console.log(e.target.alt)} alt="recipe"/>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/000000/cookie.png" onClick={(e) => console.log(e.target.alt)} alt="sweet"/>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/vegan-symbol.png" onClick={(e) => console.log(e.target.alt)} alt="tech"/>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/chinese-noodle.png" onClick={(e) => console.log(e.target.alt)} alt="rec"/>
                </Icons> */}
            </BlogHeading>
            {filteredBlogs.length > 1? 
            
            <>
            {createBlogCards}
            </>
            : 
            <p>No blogs with those keywords</p>
        
            }

               
        </BlogContainer>
    )
}

export default Blogs;