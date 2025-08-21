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
import { Link } from 'react-router-dom';
import Banner from './components/banner'



const Homes=()=>{
//   const [mydada, setMydada]=useState([
//     {id:1, name:"Content Calendar", 
// tools:"Spring Boot, PostgreSQL, Jquery", 
// description:"Developed a calendar application with Spring Boot, PostgreSQL, and jQuery. Implemented MVC and N-Tier Architecture. Stylized the webpage using Bootstrap and jQuery.", 
// link:"", 
// git:"", 
// startdate:2.2023, 
// enddate:2.2023},
// {id:2, name:"Concert Application", 
// tools:"Cold Fusion, Oracle, Bootstrap", 
// description:"Created a dynamic web application using ColdFusion IDE, connected to an Oracle database. Added a user submission form and applied Bootstrap for styling.", 
// link:"", 
// git:"", 
// startdate:2.2023, 
// enddate:2.2023},
// {id:3, name:"Fitness Website", tools:"Figma, MongoDB, Express and Node", description:"Designed a fitness application using Figma, MongoDB, Express, and Node. Developed front-end using HTML, Tailwind, and JavaScript. Implemented global state management using Context hook.", link:"", git:"https://github.com/mtravers1/MyPortfolio", startdate:2.2023, enddate:2.2023},
// {id:4, name:"IGotchabailbonds Website", tools:"NextJs, Redux, Postman, Javascript, Html, CSS, Tailwind", description:"Created a Jail Bonds website using Next JS, TypeScript, and Tailwind. Set up a JSON server, connect login/registration to the endpoint using Axios. Utilized Redux for language conversion.", link:"https://www.i-gotchabailbonds.com/", image:"./quikin.png", git:"", startdate:3.2022, enddate:2.2024},
// {id:5, name:"Quik-Influence Marketplace Website", tools:"NextJs, TypeScript, Tailwind", description:"Assisted in the development of an online retail marketplace using ReactJS and TypeScript. Added CSS changes, login/register pages, and deployed through AWS Amplify.", link:"https://www.quikinfluence.com/", image:"./quikin.png", git:"", startdate:2.2023, enddate:2.2023},
// {id:6, name:"Alliance Software Development Website", 
// tools:"ReactJs, JavaScript, CSS", 
// description:"Developed a mobile-responsive website that would provide information and catalog of applications using React and Tailwind CSS.", 
// link:"https://www.alliancesoftwaredevelopment.com/", 
// git:"", 
// startdate:2.2023, 
// enddate:2.2023},
// {id:7, name:"Workout Mobile Application", 
// image:{quik},
// tools:"Python, Kivy, Google Firebase, Balsamiq", 
// description:"Collaborated on a fitness mobile application using Python kivy and Google Firebase. Designed a GUI wireframe with Balsamiq. Implemented a database for user authentication and real-time updates using Google Firebase.", 
// link:"", 
// git:"", 
// startdate:2.2023, 
// enddate:2.2023},
// {id:8, name:"Cyberbullying Detection", 
// image:{quik},
// tools:"Python, google colab, NLP", 
// description:"Developed a Python program for cyberbullying detection using various Natural Language Processing methods. Tested/trained the model for accuracy using a Twitter dataset.", 
// link:"", 
// git:"", 
// startdate:2.2023, 
// enddate:2.2023},

// ])

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

  // const handleSubmit=(e)=>{
  //     e.preventDefault()

  //      let body={id, name, tools, description, link, git, startdate, enddate}
  //      setMydada(body);

  //     // fetch(url,{
  //     //   method:'POST',
  //     //   headers:{'content-type':'application/json'},
  //     //   body:JSON.stringify(body)
  //     // })
  // }



  return (
    <div>
      <div className='background'>
        <div>
          <span className='pics' style={{justifyContent:"center"}}>
      

          </span>



        </div>
    
 
          <div>
                <div className="about">
  <div className="about-text">
    <p id="welcome">Welcome to my portfolio.</p>
    <p id="take">
      A Computer Science professional with
      experience in <b>full-stack development, networking, and cybersecurity</b>.
      Currently pursuing <b>Master’s in Computer Science</b> at the
      University of the District of Columbia, Skilled in 
      a <b>Full Stack Development</b> and <b>Network Engineering</b>. My technical
      skills include <b>React, Node.js, Spring Boot, MongoDB, PostgreSQL,
      Python, and cloud platforms such as AWS and Azure</b>. 
      Conducted research in <b>machine learning, data science, and drone
      cybersecurity</b>, applying frameworks including the <b>NIST CSF</b> and
      evaluating models for predictive analytics. With a strong foundation in
      both academic and professional settings, Passionate about creating
      innovative, secure, and scalable solutions.
    </p>

    <div className="button-space">
      <a href="/aboutme" className="about-button">Find out more →</a>
    </div>
  </div>

  <div className="about-image">
    <img id="me" src={grad} alt="Michael Travers" />
  </div>
</div>

            
        {/* <div class="about">
          
            <div className='a'>
           
            <p id='welcome'>Welcome to my portfolio.</p>
            <p id='take'>My name is Michael Travers and I have a solid background in software development, networking, and technical support, I am confident that my diverse skill set makes me an ideal candidate for this role. I am currently pursuing my Master’s in Computer Science at the University of the District of Columbia and have gained hands-on experience through both academic coursework and professional roles.
In my previous position as a Software Developer at Alliance Software Development, I contributed to a range of full-stack web development projects. I collaborated with senior developers to create high-quality web applications using React, Node.js, Express.js, Spring Boot and databases such as MongoDB and PostgreSQL. Additionally, I gained valuable experience in debugging and managing version control through GitHub, as well as streamlining development and deployment processes using AWS Amplify. My role also involved working in an Agile environment, where I participated in daily stand-ups, sprint planning, and continuous feedback loops to ensure that project deadlines were met.
My technical skills are complemented by my experience as a Network Engineer with the DC Office of Employment Services (DOES), where I designed and deployed network infrastructures using Cisco devices, managed IP addressing, and optimized network performance. I have implemented network security protocols, including firewalls and EtherChannels, ensuring smooth and secure operations across various systems. I also recently obtained my Cisco Certified Support Technician (CCST) certification, further solidifying my technical support and networking expertise.
During my time in Graduate school, for my Data Science course, I conducted a comparative analysis of machine learning models for diabetes prediction using a dataset from 2025. Python, pandas, and other libraries were implemented and used to compare different classification models, including: Support Vector Machine, Decision Trees, Linear Regression, Random Forest, and K-Nearest Neighbors to find the most effective in terms of accuracy, precision, and recall. This process included data preprocessing to clean and prepare the dataset, including handling missing values and encoding categorical features. Feature selection to identify the most influential health factors that impact diabetes prediction. And Model Training and Evaluation.
For my CyberSecurity class, I worked with a team and developed a comprehensive cybersecurity framework for drones, integrating the NIST Cybersecurity Framework (CSF) to address critical vulnerabilities in UAV systems. This approach included implementing lightweight cryptographic protocols, secure access controls, and real-time telemetry logging, significantly enhancing the resilience of drone communication and control systems against attacks like GPS spoofing, de-authentication, and MitM attacks. 
Additionally, my coursework in Cloud Security, Data Science, and Data Engineering has further enhanced my ability to tackle complex technical challenges. I am proficient in multiple programming languages, including Python, Java, and JavaScript, and am well-versed in using tools like AWS, Microsoft Azure, and various front-end and back-end technologies.</p>
            <span id='buttonspace'>
            <button  id='button'><a style={{color:'white', textDecoration:'none'}} href="/aboutme">Find out more</a>
</button>

            </span>
            </div>
            <div className="pic">
            <img id='me' src={grad} />

            </div>
      


        </div> */}
        </div>
                        <Banner/>

    
    </div>
  
    </div>
  );
}

export default Homes;
