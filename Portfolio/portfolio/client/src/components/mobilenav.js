import React from 'react'
import { useState } from 'react';


const Mobilenav = ()=>{
    const [menu, setMenu]=useState(false)
    const toggle = ()=>{
        setMenu(!menu)
    }
    return(
        <div>
            <button onClick={toggle}>menu</button>
            {menu && (
                <div>
                    
                </div>
            )}

        </div>
    )
}
export default Mobilenav;