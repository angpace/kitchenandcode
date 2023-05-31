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
                <>
                    <br/>      
                            <div>
                                <center className="blog_title">Technology</center>
                                <br/>
                                <center className="bio" >
                                I attended <strong>Flatiron School</strong> and developed expertise in <strong>JavaScript, HTML, CSS, React.js, Ruby on Rails, and Postgres/SQL databases</strong>. 
                                I possess a strong <strong>passion</strong> for <strong>creating enjoyable user experiences</strong> and have the ability to leverage tools like <strong>SendGrid</strong> and additional plugins to enhance them. With this skill set, I am adept at crafting <strong>dynamic and user-friendly web applications</strong> that leave a lasting impression on users.

                                    While searching for a <strong>Full Stack position</strong>, I continue to expand on my technical skills and am currently studying <strong>Data Structures and Algorithms</strong> with <strong>Zero to Mastery</strong>.
                                </center>
                                <br/>
                            </div>
                            <div>
                                <center className="blog_title" ><strong>Hospitality</strong></center>
                                <br/>
                                <center className="bio">
                                Born and raised in NYC, I pursued my passion for food, creativity, and art by attending the <strong>Culinary Institue of America</strong>.
                                After graduating from their Pastry Program in 2016, I began my career as a member of the opening team at <strong>Le Coucou</strong>. 
                                Seeking new challenges, I joined the reopening team at <strong>Eleven Madison Park</strong>, the <strong>Best Restaurant in the World 2017</strong>, starting as a Pastry Chef de Partie and progressing to <strong>Pastry Sous Chef</strong>. 
                                During the pandemic, I volunteered to help provide meals for food-insecure New Yorkers before relocating to Ticino, Switzerland.
                                In 2021, I became the <strong>Pastry Chef</strong> at <strong>Davies and Brook</strong> in London, working alongside <strong>Chef De Cusine, Dmitri Magi</strong>. 
                                Following the closure of Davies and Brook in January 2022, I returned to <strong>Eleven Madison Park</strong> as the <strong>Executive Pastry Sous Chef</strong> under <strong>Pastry Chef, Laura Cronin</strong>.
                                </center>
                            </div>
                        <center className="bio">If you have any questions, please feel free to reach out. <br/>Thanks for reading!</center>
                </>
            </div>
    </div>
    )
}

export default AboutMe;