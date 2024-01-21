import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';


function App() {
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

  useEffect(()=>{

    fetch(url)
    .then(res=>res.json())
    .then(data=>setDada(data))

  })

  const handleSubmit=(e)=>{
      e.preventDefault()

      let body={id, name, tools, description, link, git, startdate, enddate}

      fetch(url,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(body)
      })
  }



  return (
    <div className="App">
      <Navbar/>
    <h1>Michael Travers Portfolio</h1>
    {
      dada.map((d)=>(
        <div key={d.id}>
          <label>Name</label>
          {d.name}

          <label>tools</label>
          {d.tools}

          <label>description</label>
          {d.description}

          <label>Link</label>
          {d.link}

          <label>Git</label>
            {d.git}

          <label>Start Date</label>
          {d.startdate}

          <label>End Date</label>
          {d.enddate}
          </div>
      ))
    }
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
  );
}

export default App;
