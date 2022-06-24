import React from 'react'
import { CardProfileProps } from './CardProfile.types'

const CardElement: React.FC<CardProfileProps> = ({ name, image, position, mail, alt }) => {
  return (
    <div className='fnd-ui-Cardprofile-container'>
      <div className='fnd-ui-Cardprofile-image' >
        <img src={image} alt={alt}/>
      </div>

      <div className='fnd-ui-Cardprofile-name'>
        <h2>{name }</h2>
      </div>
      <div className='fnd-ui-Cardprofile-separator'/>
      <div className='fnd-ui-Cardprofoile-info'>
        <p>{position}</p>
        <b>{mail}</b>
      </div>
    </div>
  )
}

export default CardElement
