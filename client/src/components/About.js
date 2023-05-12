
function About () {

    return (
        <div className="about">
            <svg xmlns="http://www.w3.org/2000/svg">
                <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
                      <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                </filter>
            </svg>
            {/* <img style={{float: "right", borderRadius: "50%"}} class="img-thumbnail" src={ME}></img> */}
                <span filter-content="S">I'm Angela Pace.</span>
                <p>Full Stack Developer, React.js Engineer, practing Zero to Mastery, Tech and Food Blogger, Pastry Chef and Problem Solver.</p>
                <p>My goal is to expand on my technical skills. View my <button><a href="/portfolio">Projects</a></button>, <button><a href="/blogposts">Blogs</a></button> or send me an email 
                at <button><a href="mailto:angpace13@gmail.com">angpace13@gmail.com.</a></button>
                </p>
                <p><a style={{color: "black"}} href="/about">Learn more about me. </a></p>                
        </div>
    )
}

export default About;