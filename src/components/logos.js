import React from "react";
import java from "../images/logos/java.png"
import javascript from "../images/logos/javascript.jpg"
import spring from "../images/logos/springboot.png"
import jQuery from '../images/logos/jquery.png';
import react from '../images/logos/react.png'
import node from '../images/logos/nodeexpress.png'
import postman from '../images/logos/postman.png'
import ccna from '../images/logos/ccna.png'
const Logos = ()=>{
    return(
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            <img src={java}/>
            <img src={javascript}/>
            <img src={spring}/>
            <img src={jQuery}/>
            <img src={react}/>
            <img src={node}/>
            <img src={postman}/>
            <img src={ccna}/>






        </div>
    )
}

export default Logos