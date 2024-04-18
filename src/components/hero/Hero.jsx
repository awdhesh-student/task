import { Button } from '@mui/material'
import React from 'react'

const Hero = () => {
   return (
      <div className='home-container'>
         <div className="left-side">
            <h1 className='roboto-black'>A new <span style={{color: "#6900e4"}}>proactive</span>
               <span style={{color: "#6900e4"}}> strategy</span> to reduce
               organizational attack surface
            </h1>
            <p className=''>Freeze rips your data away from the brokers that jeopardize your operations and reputation.</p>
            <Button variant="contained" color="secondary" size='md'>Get Started</Button>

         </div>
         <div className="right-side">
            <img alt="" src="//freeze.com/a/5H7GFBfz.svg" />
         </div>
      </div>
   )
}

export default Hero
