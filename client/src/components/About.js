import ME from "./ME.jpg"

function About () {

    return (
        <div className="about">
            <svg xmlns="http://www.w3.org/2000/svg">
                <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
                      <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                </filter>
            </svg>
            
                <span filter-content="S">I'm <br/> Angela Pace</span>
                <p>Full Stack Developer, React.js Engineer, Learning Java and AWS, Tech and Food Blogger, Pastry Chef</p>
                <p>My goal is to continue to learn and grow my Technical Skills. View my <a href="/portfolio">Projects</a>, <a href="/blogposts">Blogs</a> or send me an email at 
                    angpace13@gmail.com.
                </p>
                <p><a href="/about">Learn more about me.</a></p>
        </div>
    )
}

export default About;