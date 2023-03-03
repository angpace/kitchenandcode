import ME from "./ME.jpg"
import AboutMe from "./AboutMe";

function About () {

    return (
        <div className="about" style={{backgroundColor: "white", padding: "10px", borderRadius: "30px"}}>
            
            <center className="blog_title" style={{fontSize: "30px"}}>Welcome to Kitchen and Code! </center>
            <br/>
            <img src={ME} alt="Angela Pace" className="me"></img>
            <br/>
            <center className="bio_preview">Hello, there!  
                <br/>
                 I'm Angela Pace and I'm a Software Engineer with 
                a background in Hospitality. In 2022, I decided to switch careers from Pastry Chef to Software Engineer. 
                I attended the Software Engineering program at the FlatIron School and immediately took a liking to it. 
                Creativity, collaboration and innovation are some of my core values and are mirrored in both kitchen and code. 
                I hope you'll join me while I blog about the journey of being a Software Engineer with the past of a Pastry Chef. 
            </center>
            <br/>
            <center><a style={{color: "green", textDecoration: "none"}} className="learn_more_about" href="/about">Learn More</a></center>
        </div>
    )
}

export default About;