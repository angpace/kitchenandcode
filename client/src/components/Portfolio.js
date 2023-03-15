import Smoothie from "./Smoothie.gif"
import Synodic from "./Synodic.gif"
import candle from "./candle.gif"
import NYClean from "./NYClean.gif"
import privee from "./privee.gif"




function Portfolio() {

    return(
        <div >
            <div>
                <h1 className="blog_title">Portfolio</h1>
            </div>
            <div className="container">
                <ol type="1" className="portfolio">
                    <li >
                        <h1>Smoothie Maker</h1>
                        <br/>
                        <img alt="smoothie" src={Smoothie}></img>
                        <div className="portDescription">
                            <p >The first ever project I worked on! Create a custom smoothie with fruit of your choice. Blend and recieve the nutritional value.
                                </p>
                                <p><strong><a href="https://github.com/angpace/smoothiemaster.git">Technical:</a></strong>
                                <br/>
                                <br/>
                                Completely Vanilla Javascript. Fetching external APIs. 
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1>Synodic</h1>
                        <br/>
                        <img alt="synodic" src={Synodic}></img>
                        <div className="portDescription">
                            <p >A morning/night wellness planner. </p>
                            <p><strong><a href="https://github.com/angpace/Synodic.git">Technical:</a></strong></p> 
                            <p>React.js front end, fetching external APIs.</p>
                        </div>
                    </li>
                    <li>
                        <h1>Reminiscent</h1>
                        <br/>
                        <img alt="candle" src={candle}></img>
                        <div className="portDescription">
                            <p >An app for Users to create custom candles. <br/> 
                            Check out the <a href="https://www.youtube.com/watch?v=K_uEeSlYOh0&feature=youtu.be">Youtube</a> demo!</p>
                            <p><strong><a href="https://github.com/veryharrywilz/phase-3-reminiscent-react-frontend">Technical:</a></strong></p>
                            <p>Rails Backend, React.js Frontend, Postgres database</p>
                        </div>
                    </li>
                    <li>
                        <h1>NYCleans</h1>
                        <br/>
                        <img alt="nyclean" src={NYClean}></img>
                        <div className="portDescription">
                            <p>A "non-profit" volunteer-based cleaning app for NYC. <br/> 
                            Check out the <a href="https://www.youtube.com/watch?v=RHoJySoRt-8&feature=youtu.be">Youtube</a> demo!</p>
                            <p><strong><a href="https://github.com/B-Keshav/NYCleans">Technical:</a></strong></p>
                            <p>Rails Backend, React.js Frontend, Postgres database, Deployed on Render, Implemented Google Maps</p>
                        </div>
                    </li>
                    <li>
                        <h1>Priveé</h1>
                        <br/>
                        <img alt="privee" src={privee}></img>
                        <div className="portDescription">
                            <p>An app to connect Private Chefs with Clients seeking catering for events. <br/> 
                            Check out the <a href="https://www.youtube.com/watch?v=NrPr2wIKGgA&feature=youtu.be">Youtube</a> demo or visit <a href="https://privee.onrender.com/">Priveé</a> yourself!
                            </p>
                            <p><strong><a href="https://github.com/angpace/privee">Technical:</a></strong></p>
                            <p>Rails Backend, React.js Frontend, Postgres database, Deployed on Render, SendGrid for Email services.</p>
                        </div>
                    </li>
                </ol>
            </div>
            
        
        </div>

    )

}

export default Portfolio;  