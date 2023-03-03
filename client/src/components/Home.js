import About from "./About";
import BlogPreview from "./BlogPreview";
import logovideo from './logovideo.mp4'



import { ScrollContainer, ScrollPage, Animator, Sticky, batch, Fade} from 'react-scroll-motion';

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Home () {

    return (
        <div className="padding">
            <ScrollContainer >
            <ScrollPage>
                <Animator animation={batch(Sticky())}>
                    <video width="100%" autoPlay muted loop>
                        <source src={logovideo} type="video/mp4"/>
                    </video>
                    {/* <h1 className="movetxt">Kitchen and Code</h1>
                    <div className="heading">
                        <p className="heading__credits"><a className="heading__link" href="https://www.linkedin.com/in/angpace/
                                ">by Angela Pace</a></p>
                     </div> */}
                </Animator>
          </ScrollPage >
          <ScrollPage style={{backgroundColor: "whitesmoke", paddingTop: "25%"}}>
                <Animator >
                    <About/>
                </Animator>
          </ScrollPage>

          <ScrollPage style={{backgroundColor: "#7fccb284", paddingTop: "10%"}}>
                <Animator >
                <BlogPreview/>
                </Animator>
           </ScrollPage>

      </ScrollContainer>
        </div>
    )
}

export default Home;