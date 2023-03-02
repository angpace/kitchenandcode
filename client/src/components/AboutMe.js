import ME from "./ME.jpg"

function AboutMe () {


    return (
        <div className="padding">
            <p className="blog_title">About me</p>
            <div className="about_me">
                <br/>
                <div className="socials">
                    <img style={{width: "27%"}} src={ME} alt="Angela Pace" className="me"></img>
                    <div style={{width: "40%"}} className="socials_flex">
                        <i class="fa-brands fa-instagram"><a className="social_link" href="https://www.instagram.com/heyitspastry/?hl=en">  @heyitspacey</a></i>
                        <i class="fa-brands fa-linkedin"><a className="social_link" href="https://www.linkedin.com/in/angpace/"> Angela Pace</a></i>
                        <i class="fa-brands fa-github"><a className="social_link" href="https://github.com/angpace"> @angpace</a></i>
                        <i class="fa-regular fa-envelope"><a className="social_link" href="https://mail.google.com/"> Angpace13@gmail.com</a></i>
                        <i class="fa-brands fa-medium"><a className="social_link" href="https://medium.com/@angpace13"> @angpace13</a></i>
                    </div>
                </div>
                
                <br/>
                <p className="title" >Hospitality</p>
                <br/>
                <center className="bio">Born and raised in NYC, I've always had a passion for 
                    diverse food, creativity and art. Throughout highschool, I realized that I also had a passion for Baking. 
                    I followed that passion to the <strong>Culinary Institue of America</strong> in Hyde Park and graduated from their Pastry Program in 2016.
                    Following graduation, I secured a position as Pastry Chef de Partie as part of the opening team at <strong>Le Coucou</strong>. 
                    A year and a half later, I learned of an opportunity to join the reopening team for the Best Restaurant in the World 2017, according 
                    to San Pelligrinos 50 Best. I left Le Coucou as a Junior Pastry Sous Chef and joined the Pastry Team at <strong>Eleven Madison Park</strong>. I worked through all of the Pastry Stations before becoming a Pastry lead, and 
                    later a Pastry Sous Chef. Upon closing in 2020 due to the pandemic, I volunteered with a few coworkers to 
                    make meals for food insecure New Yorkers. In September 2020, I moved to Ticino, Switzerland, to get married to my now-husband, Kevin.
                    Kevin and I moved to London, UK in 2021, where I reopened Davies and Brook as the Pastry Chef and worked alongside 
                    Chef De Cusine Dmitri Magi. January of 2022, Davies and Brook closed and I rejoined the team at <strong>Eleven Madison Park</strong> under 
                    my mentor and Pastry Chef <strong>Laura Cronin</strong> as <strong>Executive Pastry Sous Chef</strong>. 
                </center>
                <p className="title" >Technology</p>
                <br/>
                <center className="bio" >
                    In September 2022, I attended the <strong>FlatIron School</strong> for their <strong>Software Engineering</strong> Program. 
                    Over the 15 weeks of School, I gained extensive skills in <strong>HTML/CSS/JavaScript, React.js, Ruby, SQL, Ruby on Rails and 
                    Full Stack Development.</strong> For my Capstone Project, I built Priveé- a Private Chef Platform. Priveé is a <strong>React.js/Rails</strong> 
                    application, using <strong>SendGrid</strong> for email services, <strong>PostgreSQL</strong> for database and was <strong>deployed on Render</strong>.
                    This website, Kitchen and Code, is also a <strong>React.js/Rails</strong> website with a <strong>PostgreSQL database, deployed on Render.</strong>
                     I implemented react-scroll-motion and the use of Icons to 
                    give the site a minimal but effective functionality. 

                    While searching for a <strong>Full Stack position</strong>, I continue to expand on my technical skills and am currently learning <strong>Java</strong> and <strong>AWS</strong>. My current 
                    read is <strong>Eloquent JavaScript</strong> (because you can never be too familiar with the basics.)
                </center>
                <br/>
                <center className="bio">If you have any questions, please feel free to reach out. <br/>Thanks for reading!</center>
                
            </div>
    </div>
    )
}

export default AboutMe;