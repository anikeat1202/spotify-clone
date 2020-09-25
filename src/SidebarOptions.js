import React from "react"
import "./SidebarOptions.css"
var SidebarOptions =function({title,Icon}){

return (
<div className="sidebarOptions">
{Icon && <Icon className="sidebar__icons"></Icon>}

{Icon? <h4>{title}</h4> : <p>{title}</p> }
</div>

)


}

export default SidebarOptions;