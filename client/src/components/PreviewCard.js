function PreviewCard ({b}) {

    return (
        <div>
            <h3>{b.title}</h3>
            <p><strong>{b.author}</strong>, {b.date}</p>
            <img alt="feature" src={b.feature} />
            <button onClick={() => console.log(b.id)}>Read More</button>

        </div>
    )
}

export default PreviewCard;