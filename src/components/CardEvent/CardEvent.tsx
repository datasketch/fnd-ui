import React from 'react'
import { CardEventProps } from './CardEvent.types'

import '../../sass/main.scss'
const addressed = require('../../../public/images/addressed-to-icon.svg')
const allianceImg = require('../../../public/images/alliance-icon.svg')
const calendar = require('../../../public/images/calendar-icon.svg')
const locationImg = require('../../../public/images/location-icon.svg')

const CardEvent: React.FC<CardEventProps> = ({ title, cardTitle, titleImage, image, linkEvent, href, alt, target = '_blank', description, children, date, location, alliance, audience, onClick }) => {
  return (
    <div className='fnd-ui-cardevent-container'>
      {cardTitle && <div className='fnd-ui-Cardevent-title-info'>{cardTitle}</div>}

      {image && (<div className='fnd-ui-Cardevent-image-parent'>
        <div className='fnd-ui-Cardevent-title-image'>{titleImage}</div>
        <img className='fnd-ui-Cardevent-image-container' src={image} alt={alt} />
      </div>)}

      <div className='fnd-ui-Cardevent-info-container'>
        {!image && <div style={{ padding: '15px' }}></div>}
        <h2>{title}</h2>
        <p className='fnd-ui-Cardevent-description'>{description}</p>
        <div className='fnd-ui-Cardevent-infoevent'>
          <div>
            <img src={calendar} alt='calendar' />
            <span>Fecha:</span>
            {' '}
            <p>{date}</p>
          </div>
          <div>
            <img src={locationImg} alt='location' />
            <span>Lugar: </span>
            <p>{location}
            </p>
            (
            {linkEvent && <a href={linkEvent} target={target} rel='noopener noreferrer'>Enlace aquí</a>}
            )
          </div>
          <div>
            <img src={allianceImg} alt='alliance' />
            <span>En alianza con: </span>
            <p>{alliance}</p>
          </div>
          <div>
            <img src={addressed} alt='location' />
            <span>Dirigido a: </span>
            <p>{audience} </p>
          </div>
        </div>
        <div className='fnd-ui-Cardevent-buttons'>
          <div>
            <a href={href} target='_blank' rel="noreferrer">Mas información</a>
          </div>
          <div>
            <button onClick={onClick} >Agregar al calendario</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEvent
