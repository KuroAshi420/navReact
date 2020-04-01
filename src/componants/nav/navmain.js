import React from 'react';
import './nav.css';
import NavItems from './navItems'
import DropDownMenu from './dropDown'

let list = [
    {
        lien : "#",
        name : "For entrepreneurs"
    },
    {
        lien : "#",
        name : "For Students"
    },
    {
        lien : "#",
        name : "For hobbyists"
    }
]


function Navbar () {
    return <div className="nav-menu">
       <div>
         <ul className="nav-menu-list">
             <NavItems>Home</NavItems>
             <NavItems>Services
             <DropDownMenu dropDwn= {list}/>
             </NavItems>
             <NavItems>Contact </NavItems>
         </ul>
        </div>

    </div>
    }


export default Navbar;