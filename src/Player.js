import React from 'react'
import "./player.css"
import Sidebar from "../src/Sidebar"
import Body from "../src/Body"
import Footer from "../src/Footer"

var Player = function(props){

return (
<div className="player">
<div className="player_body">
{/*sidebar*/}
<Sidebar></Sidebar>
{/*body*/}
<Body></Body>

</div>
{/*footer*/}
<Footer></Footer>

</div>



)


}


export default Player;


