import React from "react"

const DropDownMenu = (props) => {
    return <div className="dropdown-content">
                <ul>
        {props.dropDwn.map(e => (
                    <li><a href= {e.lien}>{e.name}</a></li>
                    ))} 
                </ul>
                
           </div>
}
export default DropDownMenu;