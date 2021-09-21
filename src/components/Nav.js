import React from 'react'
import { Link } from 'react-scroll';


function Nav () {

    return(
        
        <div className='nav-container'>
            <div className='nav-links'>

                <Link activeClass="active" to="Home"  smooth={true} duration={600}>
                     Home
                </Link>

                <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={600}>
                     Projects
                </Link>
                <Link activeClass="active" to="AboutMe"  smooth={true} duration={600}>
                     About Me
                </Link>

                <Link activeClass="active" to="ContactMe" spy={true} smooth={true} duration={600}>
                     Contact
                </Link>
            </div>
        </div>
    );

}
export default Nav;