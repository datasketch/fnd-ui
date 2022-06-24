import React from 'react'
import { CardColumnProps } from './CardColumn.types'

const CardElement: React.FC<CardColumnProps> = ({ image, title, subtitle, description, href, alt }) => {
  return (
    <div className='fnd-ui-Cardcolum-container'>
      <img className='fnd-ui-Cardcolum-image' src={image} alt={alt} />
      <div className='fnd-ui-Cardcolumn-info-container'>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <p>{description}</p>
      </div>
      <div className='fnd-ui-Cardcolumn-button'>
        <a href={href}>Leer columna</a>
      </div>
    </div>
  )
}

export default CardElement
