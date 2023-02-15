function BlogCard ({b}) {

    return (
        <div className="projcard-container">
            <div className="blogCard">
                    <div className="projcard projcard-green">
                        <div className="projcard-innerbox">
                            <img alt="feature" src={b.feature}/>
                            <div className="projcard-textbox">
                                <div className="projcard-title">{b.title}</div>
                                <div className="projcard-subtitle"><p>{b.author}, {b.date}</p></div>
                                <div className="projcard-bar"></div>
                                    <div className="projcard-description">
                                            <p>{b.preview}</p>
                                    </div>
                            </div>
                    </ div>
            </div>
            
                
                
                {/* <p>{b.paragraph_one}</p>
                <p>{b.paragraph_two}</p> */}
            </div>
        </div>
    )
}

export default BlogCard;