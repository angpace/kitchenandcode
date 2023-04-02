import logo from './logo.gif'

function Video (){

    return (
        <div>
                {/* <video className="kitchcode" width="80%" autoPlay muted loop>
                    <source src={logovideo} type="video/mp4"/>
                </video> */}
                <img width="100%" alt="pineapple_sliced" className="kitchcode" src={logo}></img>
        </div>

    )
}

export default Video;