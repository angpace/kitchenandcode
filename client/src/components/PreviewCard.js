function PreviewCard ({b}) {

    return (

                  <div className="title_card">
                     <h3 className="preview_title"> {b.title}</h3>
                     <img alt="feature" src={b.feature}></img>
                     <p>{b.preview}</p>
                    </div>
    
    )
}

export default PreviewCard;