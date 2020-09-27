import React from "react";
import "./Body.css"
import Header from "../src/Header.js"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Song from "../src/Song";

var playy=function(){

var audio= new Audio("../src/SongFiles/Khaab.mp3")
audio.play()


}



var Body =function({spotify}){

return (

<div className="body">
<Header spotify={spotify}></Header>

<div className="body__info">
  <img src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png" alt="" className="discover"></img>
  <div className="body__infoText">
      <h2>Discover Weekly</h2>
      <p>Your weekly mixtape of fresh music. Enjoy New music and deep cuts picked for you.Updates Every Monday..So Save Your Favorites..</p>
  </div>

</div>
 

    <div className="body__icons">

        <PlayCircleFilledIcon className="body__shuffle" onClick={playy}></PlayCircleFilledIcon>
        <FavoriteIcon fontSize="large"></FavoriteIcon>
        <MoreHorizIcon></MoreHorizIcon>
    </div>

    <div className="body__songs">
  <Song title="Khaab" image="https://api.pendu-jatt.com/thumb/14013.jpg" singer="Akhil" name="Khaab"></Song>
  <Song title="Nira Ishq" image="https://a10.gaanacdn.com/images/albums/92/2338692/crop_480x480_1545811559_2338692.jpg" singer="Guri" name="Nira Ishq"></Song>
  <Song title="Waalian" image="https://static.qobuz.com/images/covers/4a/hn/lilpbm5f9hn4a_600.jpg" singer="Harnoor" name="Waalian"></Song>
  <Song title="Tu Hi Das" image="https://m.media-amazon.com/images/I/71jvLSUYCHL._SS500_.jpg" singer="Simar Ft.Mickey Singh" name="Tu Hi Das"></Song>
  <Song title="Vail" image="https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXxgJvKm/size_xxl_1592984007.webp" singer="Mankirat Aulakh" name="Vail"></Song>
  <Song title="Jhanjra" image="https://a10.gaanacdn.com/images/albums/43/3290743/crop_480x480_1594643460_3290743.jpg" singer="Karan Randhawa" name="Jhanjra"></Song>
 </div>

</div>

)


}

export default Body;