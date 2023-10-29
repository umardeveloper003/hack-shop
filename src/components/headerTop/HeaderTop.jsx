import React from 'react'
import './HeaderTop.scss'

const HeaderTop = () => {
  return (
    <div className='headerTop'>
      <div className="container">
        <div className="block_header_top">

        <div className="title">
          <h1>Available 24/7 at (405) 555-0128</h1>
        </div>
        <ul className="nav_top">
          <li>Delivery & returns</li>
          <li>Track order</li>
          <li>Blog</li>
          <li>Contacts</li>
        </ul>
        <div className="language_haederTop">
          <img className='usa' src="/public/assets/usaFlag.svg" alt="" />
          <h1>Eng / $</h1>
          <img src="/public/assets/arrow_button.svg" alt="" />
        </div>
        <div className="user_header">
          <img src="/public/assets/user.svg" alt="" />
          <span><a href="#">Log in </a></span>
          <h1>/</h1>
          <span><a href="#">Register</a></span>
        </div>
      </div>
        </div>
    </div>
  )
}

export default HeaderTop
