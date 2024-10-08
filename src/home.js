import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Resume from './resume';
import quik from './images/logos/quikin.png'
import grad from './images/grad.jpg'
import Aboutme from './aboutme';
import Logos from './components/logos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './projects';
import Home from './home';
import Education from './education';
import Certification from './certifications';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from './components/footer'
import { Link } from 'react-router-dom';




const Homes=()=>{
  const [mydada, setMydada]=useState([
    {id:1, name:"Content Calendar", 
tools:"Spring Boot, PostgreSQL, Jquery", 
description:"Developed a calendar application with Spring Boot, PostgreSQL, and jQuery. Implemented MVC and N-Tier Architecture. Stylized the webpage using Bootstrap and jQuery.", 
link:"", 
git:"", 
startdate:2.2023, 
enddate:2.2023},
{id:2, name:"Concert Application", 
tools:"Cold Fusion, Oracle, Bootstrap", 
description:"Created a dynamic web application using ColdFusion IDE, connected to an Oracle database. Added a user submission form and applied Bootstrap for styling.", 
link:"", 
git:"", 
startdate:2.2023, 
enddate:2.2023},
{id:3, name:"Fitness Website", tools:"Figma, MongoDB, Express and Node", description:"Designed a fitness application using Figma, MongoDB, Express, and Node. Developed front-end using HTML, Tailwind, and JavaScript. Implemented global state management using Context hook.", link:"", git:"https://github.com/mtravers1/MyPortfolio", startdate:2.2023, enddate:2.2023},
{id:4, name:"IGotchabailbonds Website", tools:"NextJs, Redux, Postman, Javascript, Html, CSS, Tailwind", description:"Created a Jail Bonds website using Next JS, TypeScript, and Tailwind. Set up a JSON server, connect login/registration to the endpoint using Axios. Utilized Redux for language conversion.", link:"https://www.i-gotchabailbonds.com/", image:"./quikin.png", git:"", startdate:3.2022, enddate:2.2024},
{id:5, name:"Quik-Influence Marketplace Website", tools:"NextJs, TypeScript, Tailwind", description:"Assisted in the development of an online retail marketplace using ReactJS and TypeScript. Added CSS changes, login/register pages, and deployed through AWS Amplify.", link:"https://www.quikinfluence.com/", image:"./quikin.png", git:"", startdate:2.2023, enddate:2.2023},
{id:6, name:"Alliance Software Development Website", 
tools:"ReactJs, JavaScript, CSS", 
description:"Developed a mobile-responsive website that would provide information and catalog of applications using React and Tailwind CSS.", 
link:"https://www.alliancesoftwaredevelopment.com/", 
git:"", 
startdate:2.2023, 
enddate:2.2023},
{id:7, name:"Workout Mobile Application", 
image:{quik},
tools:"Python, Kivy, Google Firebase, Balsamiq", 
description:"Collaborated on a fitness mobile application using Python kivy and Google Firebase. Designed a GUI wireframe with Balsamiq. Implemented a database for user authentication and real-time updates using Google Firebase.", 
link:"", 
git:"", 
startdate:2.2023, 
enddate:2.2023},
{id:8, name:"Cyberbullying Detection", 
image:{quik},
tools:"Python, google colab, NLP", 
description:"Developed a Python program for cyberbullying detection using various Natural Language Processing methods. Tested/trained the model for accuracy using a Twitter dataset.", 
link:"", 
git:"", 
startdate:2.2023, 
enddate:2.2023},

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

  // useEffect(()=>{

  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>setDada(data))

  // })

  const handleSubmit=(e)=>{
      e.preventDefault()

       let body={id, name, tools, description, link, git, startdate, enddate}
       setMydada(body);

      // fetch(url,{
      //   method:'POST',
      //   headers:{'content-type':'application/json'},
      //   body:JSON.stringify(body)
      // })
  }



  return (
    <div>
      <div className='background'>
        <div>
          <span className='pics' style={{justifyContent:"center"}}>
          {/* <h1 style={{textAlign:"center"}}>Michael Travers Portfolio</h1>
          <Logos/> */}

          </span>



        </div>
    
    {/* <div>
      <h1>About Me</h1>
      <p>Experienced full-stack developer with a strong foundation in front-end and back-end technologies. 
        Proficient in JavaScript, React, Node.js, Spring Boot, and various databases. 
        Formally trained in knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, 
        security fundamentals, and automation and programmability. Seeking opportunities to contribute technical expertise to a dynamic team.
</p>
    </div> */}
          <div>
                                    {/* <h1 style={{textAlign:"center"}}>About Me</h1> */}

        <div class="about">

            <div className='a'>

            <p id='welcome'>Welcome to my portfolio.</p><p id='take'>Take a look at my experience in Full stack development and networking</p>
            <span id='buttonspace'>
            <button  id='button'><a style={{color:'white', textDecoration:'none'}} href="/aboutme">Find out more</a>
</button>

            </span>
            </div>
            <div className="pic">
            <img id='me' src={grad} />

            </div>
      


        </div>
        </div>
        <Footer/>
    {/* <Aboutme/> */}
    {/* <Projects/> */}
    {/* <h1 style={{textAlign:"center"}}>Projects</h1>

    <div style={{width:"100%"}}>
    <div className='projects'> */}
      
    {/* {
      mydada.map((d)=>(
        <div className='project' key={d.id}>
          <img src={d.image}/>
          <h3>{d.name}</h3>
         

          <h3>{d.tools}</h3>
          

          <h3>{d.description}</h3>
          

          <a href={d.link} >{d.name}</a><br/><br/>
          


          <a href={d.git}>Github</a>
            

          <h3>{d.startdate} - {d.enddate}</h3>
          

         
          </div>
      ))
    } */}
    {/* </div> */}
    {/* <Education/>
    <Certification/> */}
    {/* </div> */}
    {/* <form onSubmit={handleSubmit}>
      <label>Id</label>
      <input
      type='text'
      value={id}
      onChange={(e)=>setId(e.target.value)}
      />
      <label>Name</label>
      <input
      type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <label>Tools</label>
      <input
      type='text'
      value={tools}
      onChange={(e)=>setTools(e.target.value)}
      />

      <label>Description</label>
      <input
      type='text'
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <label>Link</label>
      <input
      type='text'
      value={link}
      onChange={(e)=>setLink(e.target.value)}
      />

      <label>Git</label>
      <input
      type='text'
      value={git}
      onChange={(e)=>setGit(e.target.value)}
      />

      <label>StartDate</label>
      <input 
      type='text'
      value={startdate}
      onChange={(e)=>setStatedate(e.target.value)}
      />

      <label>EndDate</label>
      <input
      type='text'
      value={enddate}
      onChange={(e)=>setEnddate(e.target.value)}
      />
      <button>Enter</button>
    </form> */}
    </div>
  
    {/* <Resume/> */}
    </div>
  );
}

export default Homes;
