import { useNavigate} from "react-router-dom";

function BlogCard ({b}) {
    const navigate = useNavigate();

    function getBlogPost (b) {
        navigate(`/${b.id}`)
    }


    return (
     <div>
                    <section className="cards">
                        <article className="card card--1" onClick={() => getBlogPost(b)}>
                        <div className="card__info-hover">
                            <div className="card__clock-info">
                                <span className="card__time">♡ {b.likes}</span>
                            </div>
                        </div>
                        <div  className="card__img"></div>
                            <img alt="feature" src={b.feature} className="card__img--hover"/>
                        <div className="card__info">
                            <span className="card__category">{b.category}</span>
                            <h3 className="card__title">{b.title}</h3>
                            <span className="card__by">by {b.author}</span>
                            <br/>
                            <p className="card__by">{b.preview}</p>
                        </div>
                        </article>
                     </section>                  
         </div>
       
    )
}

export default BlogCard;