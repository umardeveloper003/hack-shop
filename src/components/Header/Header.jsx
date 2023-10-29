import React from 'react'
import './header.scss'

export default function HeaderTop() {
  return (
    <div className='header'>
      <div className="container">
        <div className="header_block">

        <div className="logo">
          <img src='/public/assets/Logo.svg' alt="" />
        </div>
          <ul className="nav_head">
            <li>Women</li>
            <li>Men</li>
            <li>Girls</li>
            <li>Boys</li>
            <li>Sale</li>
          </ul>
          <div className="Seerch_header">
            <input type="text"placeholder='Search for products...'/>
            <img src='/public/assets/serch.svg' alt="" />
          </div>
          <div className="heart">
            <img src="/public/assets/heart.svg" alt="" />
            <h1>2</h1>
          </div>
          <h1 className='line_header'></h1>
          <div className="card">
            <img src="/public/assets/card.svg" alt="" />
            <h1>4</h1>
          </div>
      </div>
    </div>
        </div>
  )
}
