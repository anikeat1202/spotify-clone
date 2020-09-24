

 const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";


const clientId ="fa983faefd5846d7b485544f33809fa6";

const scopes=[
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"



];

 const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dailog=true`


const getTokenFromUrl = function(){

return window.location.hash.substring(1).split("&")
.reduce((initial,item)=>{

    let parts = item.split("=");
    initial[parts[0]]=decodeURIComponent(parts[1])
    return initial;


},{})

}



export {
authEndPoint,
loginUrl,
getTokenFromUrl,

}