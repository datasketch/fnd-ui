import React from 'react'
import { CardProfileProps } from './CardProfile.types'

const CardElement: React.FC<CardProfileProps> = ({ name, image, position, mail, alt }) => {
  return (
    <div className='fnd-ui-cardprofile__container'>
      <div className='fnd-ui-cardprofile__image' >
        <img src={image} alt={alt} />
      </div>

      <div className='fnd-ui-cardprofile__name'>
        <h2>{name}</h2>
      </div>
      <div className='fnd-ui-cardprofile__separator' />
      <div className='fnd-ui-cardprofile__info'>
        <p>{position}</p>
        <a href={`mailto:${mail}`}><b>{mail}</b></a>
      </div>
    </div>
  )
}

export default CardElement
