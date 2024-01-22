import React from "react";
import grad from './images/grad.jpg'
const Aboutme = ()=>{
    return(
        <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column", padding:"20px"}}>
            <h1>About Me</h1>

            <p>Experienced full-stack developer with a strong foundation in front-end and back-end technologies. 
        Proficient in JavaScript, React, Node.js, Spring Boot, and various databases. 
        Formally trained in knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, 
        security fundamentals, and automation and programmability. Seeking opportunities to contribute technical expertise to a dynamic team.
</p>
            </div>
            
      
<img src={grad} width={200}/>


        </div>
    )
}
export default Aboutme;