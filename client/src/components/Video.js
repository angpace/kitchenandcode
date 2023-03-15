import logovideo from './logovideo.mp4'
import logo from './logo.gif'

function Video (){

    return (
        <div>
             <center >
                {/* <video className="kitchcode" width="80%" autoPlay muted loop>
                    <source src={logovideo} type="video/mp4"/>
                </video> */}
                <img width="80%" className="kitchcode" src={logo}></img>
            </center>
        </div>

    )
}

export default Video;