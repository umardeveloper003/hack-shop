import React from 'react'
import './Section.scss'
import image from '../../../public/assets/imagesss.png'
import btns from '../../../public/assets/buttons.png'

const Section1 = () => {
  return (
    <div className='background_'>
        <img className='imageee' src={image} />
        <div className='ebalai'>Enjoy mobile shopping with our Createx Store App!</div>
        <img className='btns' src={btns}/>
    </div>
  )
}

export default Section1