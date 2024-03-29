import React from 'react'
import './nav.css'
import { useState } from 'react'
import { FaBars } from "react-icons/fa";
const Navbar=()=>{

    const [togglenav, setTogglenav]=useState(false)
    
    const menu = ()=>{
        setTogglenav(!togglenav)
    }

    return(
        <div>
        <div className='nav'>
            <ul style={{display:"flex", justifyContent:"space-around", backgroundColor:"grey"}}>
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
            <span style={{display:"flex", justifyContent:"space-between", marginBottom:"30px"}}>
            
            {/* <button style={{border:"none", background:"none", }} onClick={menu}>menu</button> */}
            <FaBars size={30} style={{position:"relative", top:"15px"}} onClick={menu}></FaBars>
            <h3>Portfolio </h3>
           

            </span>
        {togglenav && (
              <div style={{textAlign:"center"}} className='mnav'>

              <ul style={{display:"flex", flexDirection:"column", justifyContent:"space-around", }}>
                  <a style={{}} href="/home">Home</a>
                  <a href="/resume">Resume</a>
                  <a href="/projects">Projects</a>
                  <a href="/aboutme">About Me</a>
                  <a href='/certifications'>Certification</a>
                  <a href='/education'>Education</a>

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