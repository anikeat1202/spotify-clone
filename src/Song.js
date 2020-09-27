import React, { useState } from "react";
import "./Song.css"
import Khaab from "../src/SongsFiles/Khaab.mp3";
import NiraIshq from "../src/SongsFiles/NiraIshq.mp3";
import TuHiDas from "../src/SongsFiles/TuHiDas.mp3";
import Vail from "../src/SongsFiles/Vail.mp3";
import Waalian from "../src/SongsFiles/Waalian.mp3";
import Jhanjra from "../src/SongsFiles/Khaab.mp3";
import { useDataLayerValue } from "./DataLayer";

var Song= function(props){
  const[{current_song},dispatch]=useDataLayerValue(); 



var setSong= function(){
var audio;

   switch(props.name){
   
    case "Khaab":
     {
       var audio = new Audio(Khaab);
       break;
     } ;
     
    case "Nira Ishq":
      {
        var audio = new Audio(NiraIshq);
        break;
      } ;
      case "Waalian":
        {
          var audio = new Audio(Waalian);
          break;
        } ;
      
    case "Tu Hi Das":
      {
        var audio = new Audio(TuHiDas);
        break;
      } ;
      
    case "Vail":
      {
        var audio = new Audio(Vail);
        break;
      } ;
      
    case "Jhanjra":
      {
        var audio = new Audio(Jhanjra);
        break;
      } ;


   }
   
      dispatch({
        type:"SET_SONG",
         title:props.title,
         image:props.image,
         singer:props.singer,
        })
        audio.play();

    
  }

return (
<div className="song">
  
  <div className="song__box" onClick={setSong} >
  <img src={props.image} className="wallpaper" ></img>
  <br></br>
  <strong>{props.title}</strong>
  </div>
  


</div>


)




}

export default Song;