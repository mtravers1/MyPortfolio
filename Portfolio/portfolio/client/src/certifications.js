import React from "react";
import CCST from './images/logos/ccst.png'
import SecPlus from './images/logos/plus.jpeg'
import './certification.css'
const Certification = ()=>{
    return(
        <div>
           
        <div id="pic" style={{marginBottom:'400px'}}>
            <h1>Certification</h1>
            <div>
    <img src={SecPlus}/>
 <p>CompTIA Security + </p>
            <p>Completed: July 2025</p>
        
</div>

    <div>
        <img src={CCST}/>

 <p>Cisco Certified Support Technician(CCST) Certification<br/>Completed: April 2024 </p>
            {/* <p></p> */}
            </div>
           



         
            

        </div>
        
        </div>
    )
}
export default Certification;