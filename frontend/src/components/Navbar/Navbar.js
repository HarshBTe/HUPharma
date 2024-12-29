import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
  
   const navigate = useNavigate();

  const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
  }

  return (
    <div className='navbar'>
       <Link to='/'>
       <img src="https://res.cloudinary.com/di3u22t0w/image/upload/v1728406478/DDA_logo_fgvbcc.png" className="logo" alt="logo" />
       </Link>
       <ul className='navbar-menu'>
         <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
         <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
         <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
         <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
       </ul>
       <div className='navbar-right'>
       <img src="https://res.cloudinary.com/di3u22t0w/image/upload/v1728408154/search_icon_s4fifd.png" alt="not found" />
          
          <div className='navbar-search-icon'>
          <Link to='/cart'>
          <img src="https://res.cloudinary.com/di3u22t0w/image/upload/v1728408093/basket_icon_nvo34z.png" alt="not found" />
          </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          {!token ? 
          <button onClick={() => setShowLogin(true)}>sign in</button>
           : <div className='navbar-profile'>
            <img src="https://res.cloudinary.com/di3u22t0w/image/upload/v1734807105/profile_icon_c0vvbp.png" alt="" /> 
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src='https://res.cloudinary.com/di3u22t0w/image/upload/v1734807453/bag_icon_mbdsho.png' alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src='https://res.cloudinary.com/di3u22t0w/image/upload/v1734807433/logout_icon_clgmch.png' alt="" /><p>Logout</p></li>
            </ul>
            </div>
          }
       </div>
    </div>
  )
}

export default Navbar
