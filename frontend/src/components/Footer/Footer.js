import React from 'react'
import './Footer.css'
import Swal from 'sweetalert2'

const Footer = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e00b9f11-944e-497d-a9b7-6017ea7918b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
    }
  };



  return (
    <div className='footer' id="footer">
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img className="logo" src="https://res.cloudinary.com/di3u22t0w/image/upload/v1728406478/DDA_logo_fgvbcc.png" alt="" />
                <p> HU Pharma is a reliable and innovative medicine delivery service dedicated company that ensures timely access to essential healthcare. We provide a seamless platform for customers to order prescription and over-the-counter medications from trusted pharmacies, delivered directly to their doorstep.
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
                <li>+91-9431847272</li>
                <li>dubeydrug@gmail.com</li>
               </ul>

            </div>
        </div>

      <section className='contact'>
        <form onSubmit={onSubmit}>
            <h2> Contact Form </h2>
            <div className='input-box'>
                 <label>Full Name</label>
                 <input type='text' className='field' placeholder='Enter your name' name='name' required />
            </div>
            <div className='input-box'>
                 <label>Email Address</label>
                 <input type='email' className='field' placeholder='Enter your email' name='email' required />
            </div>
            <div className='input-box'>
                 <label>Your Message</label>
                 <textarea className='field mess' placeholder='Enter your message' name='message' required ></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>

    </section>








        <hr />
        <p className='footer-copyright'> Copyright 2024 © HUPharma.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
