import React from 'react'
import './nav.css'
import { useState } from 'react'
import { FaBars } from "react-icons/fa";
const Navbar=()=>{

    const [togglenav, setTogglenav]=useState(false)

    const [toggle, setToggle]=useState(false)
    
    const menu = ()=>{
        setTogglenav(!togglenav)
    }

    const resume = ()=>{
        setToggle(!toggle)
    }



    return(
        <div>
        <div className='nav'>
            <div>
            <h3 style={{color:"white"}}><a style={{color:'white', textDecoration:'none'}}>Portfolio</a></h3>
            </div>
      
            <ul id='menu' style={{display:"flex", justifyContent:"space-around"}}>
                <a href="/home"><b>Home</b></a>
                <div>

                <button onClick={resume}><b>Resume</b></button>
                {toggle && (
                <div id='resu' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                        <a href="/resume"><b>Devloper </b></a>
                        <a href="/itresume"><b>IT </b></a>
                        
                    </div>
                )}
                                </div>


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
                  {/* <a href="/resume">Resume</a> */}
                  <div>

                <button id='bat' onClick={resume}><b>Resume</b></button>
                {toggle && (
                <div id='resu' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                        <a href="/resume"><b>Devloper </b></a>
                        <a href="/itresume"><b>IT </b></a>
                        
                    </div>
                )}
                                </div>
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