import Video from "./Video";
import About from "./About";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Sticky } from "react-scroll-motion";
 

function Home () {
    const FadeUp = batch(Fade(), Sticky());

    return (
        
       <div className="home">
        <ScrollContainer>
            <ScrollPage>
                <div>
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