function BlogCard ({b}) {

    return (
        <div>
            <h2>{b.title}</h2>
            <p>{b.author} {b.date}</p>
            <img src={b.feature} alt="feature"/>
            <p>{b.preview}</p>
            <p>{b.paragraph_one}</p>
            <p>{b.paragraph_two}</p>                    
         </div>
       
    )
}

export default BlogCard;