import React,{useEffect, useState} from "react";
import Login from "../src/Login"
import {getTokenFromUrl} from "../src/spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "../src/Player";
import {useDataLayerValue} from "../src/DataLayer"
const spotify = new SpotifyWebApi();


function App() {
  
  const [{user,token},dispatch]= useDataLayerValue();

  //Run the code based on given condition
  useEffect(()=>{

   const hash = getTokenFromUrl();
   window.location.hash=""; // this line will make sure that access token is not shown in link
    
   const _token = hash.access_token;
   
   if(_token)
   {

     dispatch({
    type:"SET_TOKEN",
    token :_token,

     })

     spotify.setAccessToken(_token);

     spotify.getMe().then((user)=>{

   dispatch({
  type:"SET_USER",
  user:user,

   });

     })
   }
  
  },[]);

  return (
        <div className="app">
          {/* Logo  */}
          {/* Login With Spotify*/}
          {token ? <Player spotify={spotify}/> : <Login />}
          
        </div>
  );
}

export default App;
