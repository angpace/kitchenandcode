import ME from "./ME.jpg"
import Socials from "./Socials";

function AboutMe () {


    return (
        <div className="padding">
            <center className="blog_title">About Me</center>
             <br/>
            <div className="about_me">
                <br/>
                <div className="socials">
                    <img  src={ME} alt="Angela Pace" className="me"></img>
                    <div className="socials_flex">
                        <Socials/>
                    </div>
                </div>
                <br/>
                <div >
                    <br/>
                        <div>
                            <center className="blog_heading" style={{fontSize: "20px"}}><strong>Hospitality</strong></center>
                            <br/>
                            <center className="bio">Born and raised in NYC, I've always had a passion for 
                                diverse food, creativity and art. 
                                I followed that passion to the <strong>Culinary Institue of America</strong> in Hyde Park and graduated from their Pastry Program in 2016.
                                Following graduation, I secured a position as Pastry Chef de Partie in the opening team at <strong>Le Coucou</strong>. 
                                A year and some later, I learned of an opportunity to join the reopening team for the Best Restaurant in the World 2017, <strong>Eleven Madison Park</strong>. I left Le Coucou as a Junior Pastry Sous Chef and joined the team at <strong>EMP</strong>. I worked through all Pastry Stations before becoming a Pastry lead, and 
                                later a Pastry Sous Chef. Upon closing for the Pandemic, I volunteered for the summer to 
                                make meals for food insecure New Yorkers before moving to Ticino, Switzerland. I moved to London in 2021, where I reopened <strong>Davies and Brook</strong> as the <strong>Pastry Chef</strong> and worked
                                alongside <strong>Chef De Cusine, Dmitri Magi</strong>. January of 2022, Davies and Brook closed and I rejoined the team at <strong>Eleven Madison Park</strong>  as <strong>Executive Pastry Sous Chef</strong> under 
                                Pastry Chef <strong>Laura Cronin</strong>. 
                            </center>
                        </div>
                        
                        <div>
                             <center className="blog_heading"style={{fontSize: "20px"}}><strong>Technology</strong></center>
                             <br/>
                            <center className="bio" >
                                In September 2022, I attended the <strong>FlatIron School</strong> for their <strong>Software Engineering</strong> Program. 
                                Over the 15 weeks of School, I gained extensive skills in <strong>HTML/CSS/JavaScript, React.js, Ruby, SQL, Ruby on Rails and 
                                Full Stack Development.</strong> For my Capstone Project, I built Priveé- a Private Chef Platform. Priveé is a <strong>React.js/Rails</strong> 
                                application, using <strong>SendGrid</strong> for email services, <strong>PostgreSQL</strong> for database and was <strong>deployed on Render</strong>.
                                This website, Kitchen and Code, is also a <strong>React.js/Rails</strong> website with a <strong>PostgreSQL database, deployed on Render.
                                </strong> I implemented bootstrap, react-scroll-motion and the use of icons to 
                                give the site a minimal apperance with effective functionality. 

                                While searching for a <strong>Full Stack position</strong>, I continue to expand on my technical skills and am currently learning <strong>Python</strong>. My current 
                                read is <strong>Eloquent JavaScript.</strong>
                            </center>
                            <br/>
                        </div>
                        <center className="bio">If you have any questions, please feel free to reach out. <br/>Thanks for reading!</center>
                </div>
            </div>
    </div>
    )
}

export default AboutMe;