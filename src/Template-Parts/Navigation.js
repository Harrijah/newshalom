import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="menucontainer01">
            <div className="menucontainer02">
                <div className="menulogo">
                    <NavLink>
                        <img src="./image/shalom.png" alt="" />
                    </NavLink>
                </div>
                <ul>
                    <li><NavLink to='/'>Accueil</NavLink></li>
                    <li><NavLink to='/Contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;