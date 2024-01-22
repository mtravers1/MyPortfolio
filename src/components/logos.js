import React from "react";
import java from "../images/logos/java.png"
import javascript from "../images/logos/javascript.jpg"
import spring from "../images/logos/springboot.png"
import jQuery from '../images/logos/jquery.png';
import react from '../images/logos/react.png'
import node from '../images/logos/nodeexpress.png'
const Logos = ()=>{
    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <img src={java}/>
            <img src={javascript}/>
            <img src={spring}/>
            <img src={jQuery}/>
            <img src={react}/>
            <img src={node}/>



        </div>
    )
}

export default Logos