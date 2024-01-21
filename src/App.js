import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';

function App() {
  const [mydada, setMydada]=useState([
{id:1, name:"Fitness Website", tools:"Figma, MongoDB, Express and Node", description:"Designed a fitness application using Figma, MongoDB, Express, and Node. Developed front-end using HTML, Tailwind, and JavaScript. Implemented global state management using Context hook.", link:"", git:"https://github.com/mtravers1/MyPortfolio", startdate:2.2023, enddate:2.2023},
{id:2, name:"Fitness Website", tools:"Figma, MongoDB, Express and Node", description:"Designed a fitness application using Figma, MongoDB, Express, and Node. Developed front-end using HTML, Tailwind, and JavaScript. Implemented global state management using Context hook.", link:"", git:"https://github.com/mtravers1/MyPortfolio", startdate:2.2023, enddate:2.2023},
{id:3, name:"Fitness Website", tools:"Figma, MongoDB, Express and Node", description:"Designed a fitness application using Figma, MongoDB, Express, and Node. Developed front-end using HTML, Tailwind, and JavaScript. Implemented global state management using Context hook.", link:"", git:"https://github.com/mtravers1/MyPortfolio", startdate:2.2023, enddate:2.2023},
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
    <div >
      <Navbar/>
      <div className='background'>
    <h1>Michael Travers Portfolio</h1>
    <div style={{width:"100%"}}>
    <div style={{display:"flex", flexDirection:"row", width:"30%"}}>
      
    
    {
      mydada.map((d)=>(
        <div style={{margin:"20px"}} key={d.id}>
          <h3>Name: {d.name}</h3>
         

          <h3>tools: {d.tools}</h3>
          

          <h3>description: {d.description}</h3>
          

          <h3>Link: {d.link}</h3>
          

          <h3>Git: {d.git}</h3>
            

          <h3>Start Date: {d.startdate}</h3>
          

          <h3>End Date: {d.enddate}</h3>
          
          </div>
      ))
    }
    </div>
    </div>
    <form onSubmit={handleSubmit}>
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
    </form>
    </div>
    </div>
  );
}

export default App;
