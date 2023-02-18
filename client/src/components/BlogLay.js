import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogLay (){
    let { id } = useParams();
    const [blogPost, setBlogPost] = useState([])
    console.log(id)

    useEffect(() => {
        fetch(`blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlogPost(data))
    }, [])



    return(
        <div>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.author}</p>
            {/* <p>hello</p> */}
        </div>
    )
}

export default BlogLay;