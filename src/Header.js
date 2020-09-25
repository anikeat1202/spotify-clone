import React from "react"
import "./Header.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {Avatar} from "@material-ui/core"
import {useDataLayerValue} from "./DataLayer"

var Header = function(){

const[{user}, dispatch] =useDataLayerValue();
console.log(user);
return (
<div className="header">

 <div className="header__left">
<SearchRoundedIcon></SearchRoundedIcon>
<input placeholder="Search for Artists, Songs" type="text" className="input"></input>

 </div>


 <div className="header__right">
 <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
 <h4 className="name">{user?.display_name}</h4>
 </div>

</div>


)


}

export default Header;