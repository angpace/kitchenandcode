import About from "./About";
import BlogPreview from "./BlogPreview";
import { ScrollContainer, ScrollPage, Animator, Sticky, Zoom, batch, Fade, MoveOut, StickyIn, FadeIn, ZoomIn} from 'react-scroll-motion';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Home () {

    return (
        <div>
            <ScrollContainer>
            <ScrollPage >
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                    <h2>Welcome to Kitchen & Code!</h2>
                </Animator>
          </ScrollPage>
          <ScrollPage >
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                    <About/>
                </Animator>
          </ScrollPage>

          <ScrollPage >
                <Animator animation={ZoomInScrollOut}>
                <BlogPreview/>
                </Animator>
           </ScrollPage>

      </ScrollContainer>
        </div>
    )
}

export default Home;