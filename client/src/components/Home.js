import Video from "./Video";
import About from "./About";
 

function Home () {

    return (
       <div className="home">
            <div style={{height: "40%"}}>
                 <Video/>  
            </div>
            <div>
                <About/>
            </div>
        </div>
        
    )
}

export default Home;