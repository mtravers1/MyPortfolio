import React from 'react'
import { useState } from 'react'
import quik from './images/logos/quikin.png'
import './projects.css'
import igb from './i-gotcha-bailbonds.png'
import asd from './asd.png'
import hair from './hair1.png'
import port from './portfolio.png'
import qu from './quikinfluence.png'
import mis from './mis.png'
import Footer from './components/footer'
import phishing from './images/logos/phishing.png'
import clothes from './clothingstore.png'
import cybersecurity from './images/logos/cybersecurity.png'
import diabetes from './images/logos/diabetes.png'
const Projects = ()=>{
      const [mydada, setMydada]=useState([
       
// {id:1, name:"Configuring a Network", 
// tools:"Subnetting, IP address, Command Line Interface, Inter vlan Routing", 
// description:"Set up and configure a Network by physically connecting end and intermediate devices. Create IP addresses using subnetting. Use the Command Line Interface to assign addresses to each interface. Use telnet and ssh to connect remotely.  Use inter vlan routing for a SVI to create sub interfaces.", 
// link:"", 
// git:"", 
// startdate:1.2024, 
// enddate:1.2024},
//     {id:2, name:"Content Calendar", 
// tools:"Spring Boot, PostgreSQL, Jquery", 
// description:"Developed a calendar application with Spring Boot, PostgreSQL, and jQuery. Implemented MVC and N-Tier Architecture. Stylized the webpage using Bootstrap and jQuery.", 
// link:"", 
// git:"", 
// startdate:2.2023, 
// enddate:2.2023},
// {id:3, name:"Concert Application", 
// tools:"Cold Fusion, Oracle, Bootstrap", 
// description:"Created a dynamic web application using ColdFusion IDE, connected to an Oracle database. Added a user submission form and applied Bootstrap for styling.", 
// link:"No Link", 
// git:"", 
// startdate:8.2023, 
// enddate:9.2023},
// {id:4, name:"Fitness Website", tools:"Figma, MongoDB, Express and Node", description:"Designed a fitness application using Figma, MongoDB, Express, and Node. Developed front-end using HTML, Tailwind, and JavaScript. Implemented global state management using Context hook.", link:"No Link", git:"https://github.com/mtravers1/MyPortfolio", startdate:2.2023, enddate:2.2023},
{id:1, name:"Phishing Campaign", tools:"Phishing", description:"", link:"https://oceanbitefood.com/",  image:phishing, git:"", startdate: 7.2025, enddate:2.2024},
{id:1, name:"Drone CyberSecurity", tools:"NIST", description:"", link:"",  image:cybersecurity, git:"", startdate: 3.2025, enddate:5.2024},
{id:1, name:"Diabetes Prediction", tools:"Machine Learning", description:"", link:"",  image:diabetes, git:"", startdate: 3.2025, enddate:5.2024},
{id:1, name:"IGotchabailbonds Website", tools:"NextJs, Redux, Postman, Javascript, Html, CSS, Tailwind", description:"Created a Jail Bonds website using Next JS, TypeScript, and Tailwind. Set up a JSON server, connect login/registration to the endpoint using Axios. Utilized Redux for language conversion.", link:"https://www.i-gotchabailbonds.com/",  image:igb, git:"", startdate:1.2023, enddate:2.2024},
{id:2, image:qu, name:"Quik-Influence Marketplace Website", tools:"NextJs, TypeScript, Tailwind", description:"Assisted in the development of an online retail marketplace using ReactJS and TypeScript. Added CSS changes, login/register pages, and deployed through AWS Amplify.", link:"https://www.quikinfluence.com/", git:"", startdate:12.2022, enddate:1.2023},
{id:3, image:asd, name:"Alliance Software Development Website", 
tools:"ReactJs, JavaScript, CSS", 
description:"Developed a mobile-responsive website that would provide information and catalog of applications using React and Tailwind CSS.", 
link:"https://www.alliancesoftwaredevelopment.com/", 
git:"", 
startdate:5.2022, 
enddate:8.2022},

{id:4, name:"Clients business Website for a hair website        ", 
tools:"React, TypeScript, Node, Express, Oracle", 
image:hair,
description:"Develop a website that would allow customers to scheluel appointments using React and bootstrap to create the front end of the application. Use the fetch method to get and post to an api. Use the MVC architecture with Spring Boot for back end and connected to Mongo database.", 
link:"https://main.dgivi4wqcgsmp.amplifyapp.com/", 
git:"https://github.com/mtravers1/Hair", 
 
enddate:'in progress'},
{id:4, name:"Move in Silence Clothing brand Application", 
  tools:"ReactJs HTML, CSS, Javascript, Node Js, Express, Postgres", 
  image:mis,
  description:"Develop a web application for a Clothing brand using React and vanilla CSS for the front end, Node ExpressJs to build the server, and connect to the Postgres Database", 
  link:"https://main.d2ksyjsu87ryhl.amplifyapp.com/", 
  git:"https://github.com/mtravers1/MIS", 
   
  enddate:'in progress'},
{id:4, name:"Portfolio Website", 
tools:"ReactJs HTML, CSS, Javascript", 
image:port,
description:"Develop a website that would allow recruiters to view my resume, and expierence using ReactJs and CSS", 
link:"https://main.d28fcq71k4ljtc.amplifyapp.com/", 
git:"https://github.com/mtravers1/MyPortfolio", 
 
enddate:'in progress'},
{id:8, name:"Workout Mobile Application", 
tools:"Python, Kivy, Google Firebase, Balsamiq", 
description:"Collaborated on a fitness mobile application using Python kivy and Google Firebase. Designed a GUI wireframe with Balsamiq. Implemented a database for user authentication and real-time updates using Google Firebase.", 
link:"", 
git:"", 
startdate:2.2022, 
enddate:4.2022},
{id:9, name:"Cyberbullying Detection", 
image:{quik},
tools:"Python, google colab, NLP", 
description:"Developed a Python program for cyberbullying detection using various Natural Language Processing methods. Tested/trained the model for accuracy using a Twitter dataset.", 
link:"", 
git:"", 
startdate:10.2021, 
enddate:12.2021},

])

  const [dada, setDada]=useState([])
  const [id, setId]=useState('')
  const [name, setName]=useState('')
  const [tools, setTools]=useState('')
  const [description, setDescription]=useState('')
  const [link, setLink]=useState('')
  const [git, setGit]=useState('')
  const [startdate, setStatedate]=useState('')
  const [enddate, setEnddate]=useState('')
  const url="http://localhost:8080"
    return(
                <div style={{width:"100%"}}>
                    <h1 style={{textAlign:"center"}}>Projects</h1>
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}} className='projects'>

    {
      mydada.map((d)=>(
        <div className='project' style={{padding:"20px"}}>
         
          <a href={d.link} ><img width={80} src={d.image}/></a>
          <h3 id='name'>{d.name}</h3>
         

          <h3>{d.tools}</h3>
          

          <h3>{d.description}</h3>
          

          <a style={{textDecoration:'none', color:'white', fontSize:'large',fontWeight:'bold'}} href={d.link} >{d.name}</a><br/><br/>
          


          <a style={{textDecoration:'none', color:'white', fontSize:'large',fontWeight:'bold'}} href={d.git}><i></i>Github</a>
            

          <h3>{d.startdate} - {d.enddate}</h3>
          

         
          </div>
      ))
    }
    {/* {
      mydada.map((d)=>(
        <div className='card' style={{margin:"20px", width:"25%"}} key={d.id}>
          <img src={d.image}/>
          <h3>Name: {d.name}</h3>
         

          <h3>tools: {d.tools}</h3>
          

          <h3>description: {d.description}</h3>
          

          <h3>Link: </h3>
          <a href={d.link} >{d.name}</a>
          

          <h3>Git: </h3>
          <a href={d.git}>Githut:{d.name}</a>
            

          <h3>Start Date: {d.startdate}</h3>
          

          <h3>End Date: {d.enddate}</h3>
          
          </div>
      ))
    } */}
    </div>

    </div>
    )
}

export default Projects