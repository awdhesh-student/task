import { Container } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterCont = () => {
   return (
      <footer className="site-footer">
         <Container>
            <div className="row">
               <div className="column">
                  <h6>Product</h6>
                  <ul className="footer-links">
                     <li><a href="#">Sign Up</a></li>
                  </ul>
               </div>

               <div className="column">
                  <h6>Company</h6>
                  <ul className="footer-links">
                     <li><a href="#">Work with Freeze</a></li>
                  </ul>
               </div>

               <div className="column">
                  <h6>Legal</h6>
                  <ul className="footer-links">
                     <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Privacy Policy</a></li>
                  </ul>
               </div>

               <div className="column">
                  <h6>Languages</h6>
                  <ul className="footer-links">
                     <li><a href="#">English</a></li>
                  </ul>
               </div>
            </div>
            <hr />
         </Container>
         <Container>
            <div className="row">
               <div className="column">
                  <p className="copyright-text">&copy; 2024 Freeze Inc. All rights reserved. </p>
               </div>

               <div className="column">
                  <ul className="social-icons">
                     <li><a className="facebook" href="#"><TwitterIcon /></a></li>
                     <li><a className="facebook" href="#"><TwitterIcon /></a></li>
                     <li><a className="facebook" href="#"><TwitterIcon /></a></li>
                     <li><a className="facebook" href="#"><TwitterIcon /></a></li>
                  </ul>
               </div>
            </div>
         </Container >
      </footer >

   )
}

export default FooterCont
