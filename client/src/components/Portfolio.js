import Smoothie from "./Smoothie.gif"
import Synodic from "./Synodic.gif"
import candle from "./candle.gif"
import NYClean from "./NYClean.gif"
import privee from "./privee.gif"
import Carousel from 'react-bootstrap/Carousel'




function Portfolio() {
    return (
        <>
        <div>
            <h1 className="blog_title">Portfolio</h1>
          </div>
        <Carousel variant="dark">
        <Carousel.Item>
            <img
             className="portfolio" 
              src={privee}
              alt="Privee"
            />
    
            <Carousel.Caption className="port_caption">
              <h3>Priveé</h3>  
              <p>An app to connect Private Chefs with Clients seeking catering for events. <br/> 
                          Check out the <a href="https://www.youtube.com/watch?v=NrPr2wIKGgA&feature=youtu.be">Youtube</a> demo or visit <a href="https://privee.onrender.com/">Priveé</a> yourself!
                          </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             className="portfolio" 
              src={candle}
              alt="Reminiscent"
            />
    
            <Carousel.Caption className="port_caption">
              <h3>Reminiscent</h3>
              <p>
              An app for Users to create custom candles. <br/>
              Check out the <a href="https://www.youtube.com/watch?v=K_uEeSlYOh0&feature=youtu.be">Youtube</a> demo!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             className="portfolio" 
              src={NYClean}
              alt="NYClean"
            />
    
            <Carousel.Caption className="port_caption">
              <h3>NYCleans</h3>
              <p>
                A "non-profit" volunteer-based cleaning app for NYC. <br/> 
                Check out the <a href="https://www.youtube.com/watch?v=RHoJySoRt-8&feature=youtu.be">Youtube</a> demo!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="portfolio"
              src={Smoothie}
              alt="Smoothie Maker"
            />
            <Carousel.Caption className="port_caption">
              <h3>Smoothie Maker</h3>
              <p>Create a custom smoothie with fruit of your choice. Blend and recieve the nutritional value.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="portfolio"
              src={Synodic}
              alt="Second slide"
            />
    
            <Carousel.Caption className="port_caption">
              <h3>Synodic</h3>
              <p>A morning/night wellness planner.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </>
      );
    }
    



export default Portfolio;  