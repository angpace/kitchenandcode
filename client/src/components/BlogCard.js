function BlogCard ({b}) {

    return (
        <div>
            <h2>{b.title}</h2>
            <p><strong>{b.author}, {b.date}</strong></p>
            <p>{b.preview}</p>
            <img src={b.feature}/>
            <p>{b.paragraph_one}</p>
            <p>{b.paragraph_two}</p>
        </div>
    )
}

export default BlogCard;