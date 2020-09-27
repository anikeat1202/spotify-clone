import React from "react"
import "./Footer.css"
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import {Grid,Slider} from "@material-ui/core";
import PlaylistPlayOutlinedIcon from '@material-ui/icons/PlaylistPlayOutlined';
import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
  import { useDataLayerValue } from "./DataLayer";

var Footer =function(){

const[{current_song},dispatch]=useDataLayerValue();


return (
<div className="footer">
  <div className="footer__left">
  <img src={current_song.image} className="album__logo"></img>
  <div className="song__info">
    <h4>{current_song.title}</h4>
    <p>{current_song.singer}</p>
  </div>
  </div>


  <div className="footer__center">
   <ShuffleOutlinedIcon className="footer__green"></ShuffleOutlinedIcon>
   <SkipPreviousOutlinedIcon className="footer__icon"></SkipPreviousOutlinedIcon>
   <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon"></PlayCircleOutlineOutlinedIcon>
   <SkipNextOutlinedIcon className="footer__icon"></SkipNextOutlinedIcon>
   <RepeatOutlinedIcon className="footer__green"></RepeatOutlinedIcon>
  </div>


  <div className="footer__right">
   <Grid container spacing={2}>
   <Grid item>
     <PlaylistPlayOutlinedIcon></PlaylistPlayOutlinedIcon>
   </Grid>
   <Grid item>
     <VolumeDownOutlinedIcon></VolumeDownOutlinedIcon>
   </Grid>
   <Grid item xs>
   <Slider className=""></Slider>

   </Grid>

   </Grid>

  </div>

</div>

)


}

export default Footer;