import React from 'react'
import { CardColumnProps } from './CardColumn.types'

const CardColumn: React.FC<CardColumnProps> = ({ image, title, subtitle, description, href, alt, target = '_self' }) => {
  return (
    <div className='fnd-ui-cardcolumn__container'>
      <img className='fnd-ui-cardcolumn__image' src={image} alt={alt} />
      <div className='fnd-ui-cardcolumn__info-container'>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <p>{description}</p>
      </div>
      <div className='fnd-ui-cardcolumn__button'>
        <a href={href} target={target}>Leer columna</a>
      </div>
    </div>
  )
}

export default CardColumn
