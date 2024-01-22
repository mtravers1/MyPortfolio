import React from 'react'

const Projects = ()=>{
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
    return(
                <div style={{width:"100%"}}>
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}} className='projects'>
      
    {
      mydada.map((d)=>(
        <div style={{margin:"20px", width:"25%"}} key={d.id}>
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
    }
    </div>
    </div>
    )
}

export default Projects