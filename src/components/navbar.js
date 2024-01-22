import React from 'react'
import './nav.css'
import { useState } from 'react'
const Navbar=()=>{

    const [togglenav, setTogglenav]=useState(false)
    return(
        <div>
        <div className='nav'>
            <ul style={{display:"flex", justifyContent:"space-around"}}>
                <a href="/home"><b>Home</b></a>
                <a href="/resume"><b>Resume</b></a>
                <a href="/projects"><b>Projects</b></a>
                <a href="/aboutme"><b>About Me</b></a>
                {/* <a href="/">Contact</a> */}
            </ul>
        </div>
        {togglenav && 
        <div className='mobilenav'>
            <ul style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <a href="/home"><b>Home</b></a>
                <a href="/resume"><b>Resume</b></a>
                <a href="/projects"><b>Projects</b></a>
                <a href="/aboutme"><b>About Me</b></a>
                {/* <a href="/">Contact</a> */}
            </ul>


            </div>
}   

        </div>
        

    )
}
export default Navbar;