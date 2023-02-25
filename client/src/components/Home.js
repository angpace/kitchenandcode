import About from "./About";
import BlogPreview from "./BlogPreview";
import knife from './knife.gif'


import { ScrollContainer, ScrollPage, Animator, Sticky, batch, Fade, MoveOut} from 'react-scroll-motion';

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Home () {

    return (
        <div>
            <ScrollContainer>
            <ScrollPage >
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                    <img alt="knife" className="knifeThrow" src={knife}></img>
                    <h1 className="movetxt">Kitchen and Code</h1>
                    <div className="heading">
                        <p className="heading__credits"><a className="heading__link" href="https://www.linkedin.com/in/angpace/
                                ">by Angela Pace</a></p>
                     </div>
                </Animator>
          </ScrollPage>
          <ScrollPage >
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                    <About/>
                </Animator>
          </ScrollPage>

          <ScrollPage >
                <Animator >
                <BlogPreview/>
                </Animator>
           </ScrollPage>

      </ScrollContainer>
        </div>
    )
}

export default Home;