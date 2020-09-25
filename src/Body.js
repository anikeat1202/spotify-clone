import React from "react";
import "./Body.css"
import Header from "../src/Header.js"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

var Body =function({spotify}){

return (

<div className="body">
<Header spotify={spotify}></Header>

<div className="body__info">
  <img src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png" alt=""></img>
  <div className="body__infoText">
      <strong>PLAYLIST</strong>
      <h2>Discover Weekly</h2>
      <p>Your weekly mixtape of fresh music. Enjoy New music and deep cuts picked for you.Updates Every Monday..</p>
  </div>

</div>
 <div className="body__songs">

    <div className="body__icons">

        <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
        <FavoriteIcon fontSize="large"></FavoriteIcon>
        <MoreHorizIcon></MoreHorizIcon>
    </div>

 </div>
</div>

)


}

export default Body;