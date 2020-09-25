import React from "react"
import "./Sidebar.css"
import SidebarOptions from "../src/SidebarOptions";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded';
import { useDataLayerValue } from "./DataLayer";

var Sidebar =function(){

const [{playlists},dispatch] = useDataLayerValue();

return (
<div className="sidebar">
  <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className="sidebar_logo" alt="spotifylogo"></img>
  <SidebarOptions  Icon={HomeRoundedIcon} title="Home"></SidebarOptions>
  <SidebarOptions Icon={SearchRoundedIcon} title="Search" ></SidebarOptions>
  <SidebarOptions Icon={LibraryMusicRoundedIcon} title="Your Library" ></SidebarOptions>
 <br></br>
  <strong className="playlist">PLAYLISTS</strong>
  <hr></hr>
  
   {playlists?.items?.map((playlist)=>(
   <SidebarOptions title={playlist.name}></SidebarOptions>
   ))}
   

 
</div>

)


}

export default Sidebar;