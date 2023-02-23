import About from "./About";
import BlogPreview from "./BlogPreview";


import { ScrollContainer, ScrollPage, Animator, Sticky, batch, Fade, MoveOut} from 'react-scroll-motion';

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Home () {

    return (
        <div>
            <ScrollContainer>
            <ScrollPage >
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                    <div className="heading">
                        <h2 className="heading__title" >Welcome to Kitchen & Code!</h2>
                        <p class="heading__credits"><a class="heading__link" href="https://www.linkedin.com/in/angpace/
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