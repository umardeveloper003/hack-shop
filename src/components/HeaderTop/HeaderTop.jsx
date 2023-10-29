import React from 'react'
import './HeaderTop.scss'
import aroowButtom from '../../../public/assets/arrowButtom.svg'
import usaFlag from '../../../public/assets/usaFlag.svg'
import user from '../../../public/assets/user.svg'


export default function HeaderTop() {
  return (
    <div className='HeaderTop'>    
         <div className="container">
            <div className="block_topHead">

            <div className="title_hedTop">
                <h1>Available 24/7 at (405) 555-0128</h1>
            </div>
            <ul className="nav_top">
                <li>Delivery & returns</li>
                <li>Track order</li>
                <li>Blog</li>
                <li>Contacts</li>
            </ul>
                <div className="lenguage_top">
                    <img className='img-1' src={usaFlag} alt="" />
                    <p>Eng / $</p>
                    <img lassName='img-2' src={aroowButtom} alt="" />
                    <div className="login-topHed">
                        <img src={user} alt="" />
                        <span><a href="#">log in </a></span>
                        <p> / </p>
                        <span><a href="#"> Register</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}
