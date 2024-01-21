import React from "react";

const Card = ()=>{
    return(
        <div>
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
    )
}

export default Card