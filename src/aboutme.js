import React from "react";
import grad from './images/grad.jpg'
import './aboutme.css'
import Footer from './components/footer'
const Aboutme = ()=>{
    return(
        <div>
                                    <h1 style={{textAlign:"center"}}>About Me</h1>

        <div style={{display:"flex", justifyContent:"center"}} className="about">

            <div style={{display:"flex", flexDirection:"column", padding:"20px", width:"70%"}}>

            <p><b>Experienced full-stack developer with a strong foundation in front-end and back-end technologies. Worked with multiple clients to create user friendly web applications. Proficient in JavaScript, React, Node.js, Spring Boot, and various databases. Seeking opportunities to contribute technical expertise to a dynamic team.</b></p>
            </div>
            <div className="pic">
            <img src={grad} width={200}/>

            </div>
      


        </div>
        <Footer/>

        </div>

    )
}
export default Aboutme;