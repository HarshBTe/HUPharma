import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img className="logo" src="https://res.cloudinary.com/di3u22t0w/image/upload/v1728406478/DDA_logo_fgvbcc.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className='footer-social-icons'>
                   <img src='https://res.cloudinary.com/di3u22t0w/image/upload/v1733114355/facebook_icon_ubneia.png' alt="" />
                   <img src='https://res.cloudinary.com/di3u22t0w/image/upload/v1733114342/twitter_icon_dztyv6.png' alt="" />
                   <img src='https://res.cloudinary.com/di3u22t0w/image/upload/v1733114368/linkedin_icon_ckzmeq.png' alt="" />

                </div>
            </div>

            <div className='footer-content-center'>
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

               </ul>
            </div>

            <div className='footer-content-right'>
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+1-212-456-7890</li>
                <li>contact@hupharma.com</li>
               </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2024 © HUPharma.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
