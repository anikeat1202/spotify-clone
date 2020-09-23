import React,{useEffect, useState} from "react";
import Login from "../src/Login"
import {getTokenFromUrl} from "../src/spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "../src/Player";

const spotify = new SpotifyWebApi();


function App() {
  
  const [token,setToken]=useState(null)


  //Run the code based on given condition
  useEffect(()=>{

   const hash = getTokenFromUrl();
   window.location.hash=""; // this line will make sure that access token is not shown in link
    
   const _token = hash.access_token;
   
   if(_token)
   {
     setToken(_token);
     spotify.setAccessToken(_token);

     spotify.getMe().then((user)=>{

  console.log(user);

     })
   }
  
  },[]);


  return (
        <div className="app">
          {/* Logo  */}
          {/* Login With Spotify*/}
          {token ? <Player/> : <Login />}
          
        </div>
  );
}

export default App;
