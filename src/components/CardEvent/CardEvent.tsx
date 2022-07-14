import React from 'react'
import { CardEventProps } from './CardEvent.types'

const addressed = require('../../../public/images/addressed-to-icon.svg')
const allianceImg = require('../../../public/images/alliance-icon.svg')
const calendar = require('../../../public/images/calendar-icon.svg')
const locationImg = require('../../../public/images/location-icon.svg')

const CardEvent: React.FC<CardEventProps> = ({ title, cardTitle, titleImage, image, linkEvent, href, alt, target = '_blank', description, children, date, location, alliance, audience, onClick }) => {
  return (
    <div className={`fnd-ui-cardevent__container ${image ? 'fnd-ui-cardevent__container--big' : 'fnd-ui-cardevent__container--small'}`}>
      {cardTitle && <div className='fnd-ui-cardevent__title-info'>{cardTitle}</div>}

      {image && (<div className='fnd-ui-cardevent__image-parent'>
        <div className='fnd-ui-cardevent__title-image'>{titleImage}</div>
        <img className='fnd-ui-cardevent__image-container' src={image} alt={alt} />
      </div>)}

      <div className='fnd-ui-cardevent__info-container'>
        {!image && <div style={{ padding: '15px' }}></div>}
        <h2>{title}</h2>
        <p className='fnd-ui-cardevent__description'>{description}</p>
        <div className='fnd-ui-cardevent__infoevent'>
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
        <div className='fnd-ui-cardevent__buttons'>
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
