import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogContainer, BlogHeading, Icons, Icon} from "./BlogElements";


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
            <BlogHeading>
                <h3>All Blogs</h3>
                <Icons>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/ingredients.png" alt="ingredients"/>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/000000/cookie.png" alt="cookie"/>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/vegan-symbol.png" alt="vegan-symbol"/>
                <Icon width="35" height="35" src="https://img.icons8.com/plasticine/100/chinese-noodle.png" alt="chinese-noodle"/>
                </Icons>
            </BlogHeading>
            
                {createBlogCards}
        </BlogContainer>
    )
}

export default Blogs;