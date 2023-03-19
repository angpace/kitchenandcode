import Video from "./Video";
import About from "./About";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
 

function Home () {
    const FadeUp = batch(Fade(), Sticky());

    return (
        
       <div className="home">
        <ScrollContainer>
            <ScrollPage>
                <div style={{height: "60%"}}>
                    <Video/>  
                </div>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={FadeUp}>
                    <About/>
                </Animator>
            </ScrollPage>

            </ScrollContainer>
        </div>
        
    )
}

export default Home;