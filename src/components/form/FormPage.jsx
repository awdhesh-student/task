import React from 'react'
import { Button } from '@mui/material'

const FormPage = () => {
   return (
      <div className='form-container'>
         <h2 style={{ color: 'grey', fontWeight: "bolder" }}>Get started with Freeze</h2>
         <p>Ready to protect your business? Please provide your contact information to learn more about reducing your attack surface and safeguarding your enterprise.
            <div className='form-fields'>
               <form action="">
                  <div className="fields">
                     <label htmlFor='name'>First Name: </label><br />
                     <input type='text' id='name' name='name' required />
                  </div>
                  <div className="fields">
                     <label htmlFor='name'>Last Name: </label><br />
                     <input type='text' id='name' name='name' required />
                  </div>
                  <div className="fields">
                     <label htmlFor='name'>Company Name: </label><br />
                     <input type='text' id='name' name='name' required />
                  </div>
                  <div className="fields">
                     <label htmlFor='email'>Email: </label><br />
                     <input type='email' id='email' name='email' required />
                  </div>
                  <div className="fields">
                     <label htmlFor='phone'>Phone: </label><br />
                     <input type='phone' id='phone' name='phone' required />
                  </div>
                  <div className="fields">

                     <Button variant="contained" color="secondary" size='md'>Get Started</Button>
                  </div>
               </form>

            </div>
         </p>
      </div>
   )
}

export default FormPage
