import React from 'react'
import './Header.scss'
import LogoHeader from '../../../public/assets/LogoHeader.svg'
import serch from '../../../public/assets/serch.svg'
import heart from '../../../public/assets/heart.svg'
import card from '../../../public/assets/card.svg'

export default function Header() {
  return (
    <div className='Header'>
        <div className="container">
            <div className="block_header">
                <div className="LogoHeader">
                    <img src={LogoHeader} alt="" />
                </div>
                <ul className="nav_header">
                    <li>Women</li>
                    <li>Men</li>
                    <li>Girls</li>
                    <li>Boys</li>
                    <li>Sale</li>
                </ul>
                <div className="serch_header">
                    <input type="text" placeholder='Search for products...' />
                    <img src={serch} alt="" />
                </div>
                <div className="heart">
                    <img src={heart} alt="" />
                    <h1>2</h1>
                </div>
                <h1 className='line_header'></h1>
                <div className="card">
                    <img src={card} alt="" />
                    <h1>4</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
