import React from 'react'
import { CardEventProps } from './CardEvent.types'
import addressed from '../../../public/images/addressed-to-icon.svg'
import alliance from '../../../public/images/alliance-icon.svg'
import calendar from '../../../public/images/calendar-icon.svg'
import location from '../../../public/images/location-icon.svg'
import './CardEvent.scss'

const CardEvent: React.FC<CardEventProps> = ({ title, cardTitle, titleImage, image, linkEvento, href, alt, description, children, fecha, lugar, alianza, dirigido }) => {
  return (
    <div className='fnd-ui-cardevent-container'>
      <div className='fnd-ui-Cardevent-title-info'>{cardTitle}</div>

      <div className='fnd-ui-Cardevent-image-parent'>
        <div className='fnd-ui-Cardevent-title-image'>{titleImage}</div>
        <img className='fnd-ui-Cardevent-image-container' src={image} alt={alt} />
      </div>

      <div className='fnd-ui-Cardevent-info-container'>
        <h2>{title}</h2>
        <p className='fnd-ui-Cardevent-description'>{description}</p>
        <div className='fnd-ui-Cardevent-infoevent'>
          <div>
            <img src={calendar} alt='calendar' />
            <span>Fecha:</span>
            {' '}
            <p>{fecha}</p>
          </div>
          <div>
            <img src={location} alt='location' />
            <span>Lugar: </span>
            <p>{lugar}
            </p>
            (
            {linkEvento && <a href={linkEvento} target='_blank' rel='noopener noreferrer'>Enlace aquí</a>}
            )
          </div>
          <div>
            <img src={alliance} alt='alliance' />
            <span>En alianza con: </span>
            <p>{alianza}</p>
          </div>
          <div>
            <img src={addressed} alt='location' />
            <span>Dirigido a: </span>
            <p>{dirigido} </p>
          </div>
        </div>
        <div className='fnd-ui-Cardevent-buttons'>
          <div>
            <a href={href} target='_blank' rel="noreferrer">Mas información</a>
          </div>
          <div>
            <button >Agregar al calendario</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEvent
