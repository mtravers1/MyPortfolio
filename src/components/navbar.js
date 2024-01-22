import React from 'react'
import './nav.css'
import { useState } from 'react'
const Navbar=()=>{

    const [togglenav, setTogglenav]=useState(false)
    
    const menu = ()=>{
        setTogglenav(!togglenav)
    }

    return(
        <div>
        <div className='nav'>
            <ul style={{display:"flex", justifyContent:"space-around"}}>
                <a href="/home"><b>Home</b></a>
                <a href="/resume"><b>Resume</b></a>
                <a href="/projects"><b>Projects</b></a>
                <a href="/aboutme"><b>About Me</b></a>
                <a href='/certifications'><b>Certification</b></a>
                <a href='/education'><b>Education</b></a>
                {/* <a href="/">Contact</a> */}
            </ul>
        </div>
        <div className='mobilenav'>
            <span style={{display:"flex", justifyContent:"space-evenly", marginBottom:"30px"}}>
            
            <button onClick={menu}>menu</button>
            <h3>Michael Travers Portfolio</h3>

            </span>
        {togglenav && (
              <div style={{}} className=''>

              <ul style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                  <a style={{}} href="/home"><b>Home</b></a>
                  <a href="/resume"><b>Resume</b></a>
                  <a href="/projects"><b>Projects</b></a>
                  <a href="/aboutme"><b>About Me</b></a>
                  <a href='/certifications'><b>Certification</b></a>
                  <a href='/education'><b>Education</b></a>

                  {/* <a href="/">Contact</a> */}
              </ul>
  
  
              </div>
        )
      
}   

        </div>
        </div>
        

    )
}
export default Navbar;