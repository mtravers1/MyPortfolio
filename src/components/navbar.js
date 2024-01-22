import React from 'react'
import './nav.css'
const Navbar=()=>{
    return(
        <div className='nav'>
            <ul style={{display:"flex", justifyContent:"space-around"}}>
                <a href="/home"><b>Home</b></a>
                <a href="/resume"><b>Resume</b></a>
                <a href="/projects"><b>Projects</b></a>
                <a href="/aboutme"><p><b>About Me</b></p></a>
                {/* <a href="/">Contact</a> */}
            </ul>
        </div>
    )
}
export default Navbar;