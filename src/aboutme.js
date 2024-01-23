import React from "react";
import grad from './images/grad.jpg'
import './aboutme.css'
const Aboutme = ()=>{
    return(
        <div>
                                    <h1 style={{textAlign:"center"}}>About Me</h1>

        <div style={{display:"flex", justifyContent:"center"}} className="about">

            <div style={{display:"flex", flexDirection:"column", padding:"20px", width:"70%"}}>

            <p>Experienced full-stack developer with a strong foundation in front-end and back-end technologies. 
        Proficient in JavaScript, React, Node.js, Spring Boot, and various databases. 
        Formally trained in knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, 
        security fundamentals, and automation and programmability. Seeking opportunities to contribute technical expertise to a dynamic team.
</p>
            </div>
            <div className="pic">
            <img src={grad} width={200}/>

            </div>
      


        </div>
        </div>

    )
}
export default Aboutme;