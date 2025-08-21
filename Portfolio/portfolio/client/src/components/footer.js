import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = ()=>{
    return(
      <div id="foot">
        <p>Phone: 202-288-0295</p>
        <p>Email: miketravers94@gmail.com</p>
        <p>Location: Washington DC</p>
        <div id='social'>
          <a href="https://github.com/mtravers1">
          <FaGithub style={{color:'white'}}  size={50}/>

          </a>
          <a href="https://www.linkedin.com/in/michael-travers1/">
          <FaLinkedin style={{color:'white'}} size={50}/>

          </a>
          

        </div>

        </div>
    )
}

export default Footer;