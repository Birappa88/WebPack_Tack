import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <h1>! Welcome to Home Page !</h1>
            <Link to="/access-card"><button className='routebut'>Access Card</button></Link>
            <Link to="/fetch-user"><button className='routebut'>Fetch Users</button></Link>
            <Link to="/my-vehicles"><button className='routebut' >My Vehicle</button></Link>
            <Link to="/color"><button className='routebut' >Change Color</button></Link>
            <Link to="/shrink-box"><button className='routebut' >Shrink Box</button></Link>
        </div>
    )
}
export default Header;