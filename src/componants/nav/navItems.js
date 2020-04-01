import React from "react"
const NavItems = (props) => {
    return <div className="itm">
                <li>
                    <a href="#">{props.children}</a>
                </li>
           </div>
}
export default NavItems