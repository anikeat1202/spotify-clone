import React from "react";
import "./Login.css"
import "./spotify"
import { authEndPoint ,loginUrl} from "./spotify";

var Login = function(){

return (
<div className="login">
<img className="logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"  ></img>
<br></br>
<a className="logb" href={loginUrl}>Login With Spotify</a>
</div>
)
}

export default Login;