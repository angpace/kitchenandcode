import logovideo from './logovideo.mp4'

function Video (){

    return (
        <div>
             <center >
                <video className="kitchcode" width="80%" autoPlay muted loop>
                    <source src={logovideo} type="video/mp4"/>
                </video>
            </center>
        </div>

    )
}

export default Video;