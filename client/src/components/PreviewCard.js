import { useNavigate} from "react-router-dom";

function PreviewCard ({b}) {
    const navigate = useNavigate()

    function getBlogPost (b) {
        navigate(`/${b.id}`)
    }

    return (

                  <div className="title_card" onClick={() => getBlogPost(b)}>
                     <h3 className="preview_title"> {b.title}</h3>
                     <img alt="feature" src={b.feature}></img>
                     <p style={{width: "70%"}}>{b.preview}</p>
                     <button onClick={() => getBlogPost(b)}>Read More</button>
                    </div>
    
    )
}

export default PreviewCard;