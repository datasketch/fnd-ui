import React from 'react'
import { CardEventProps } from './CardEvent.types'

import addressed from '../../../public/images/addressed-to-icon.svg'
import allianceImg from '../../../public/images/alliance-icon.svg'
import calendar from '../../../public/images/calendar-icon.svg'
import locationImg from '../../../public/images/location-icon.svg'

const CardEvent: React.FC<CardEventProps> = ({ title, description, date, site, virtualLink = '', alliance, addressedTo, moreInformationLink, srcImage = '', altImage = '', cardTitle = '', target = '_self', onClick }) => {
  return (
    srcImage
      ? (
        <div className='fnd-ui-cardevent__container fnd-ui-cardevent__container--big'>
          <img className='fnd-ui-cardevent__image' src={srcImage} alt={altImage || ''} />
          <div className='fnd-ui-cardevent__details'>
            <h3 className='fnd-ui-cardevent__title'>
              {title}
            </h3>
            <p className='fnd-ui-cardevent__description'>
              {description}
            </p>
            <div className='fnd-ui-cardevent__date'>
              <img src={calendar} alt="calendar icon" />
              <p>
                Fecha: <b>{date}</b>
              </p>
            </div>
            <div className='fnd-ui-cardevent__site'>
              <img src={locationImg} alt="location icon" />
              {
                virtualLink
                  ? (
                    <p>
                      Lugar: <b>Evento virtual (<a href={virtualLink} target="_blank" rel="noreferrer">Enlace aquí</a>)</b>
                    </p>
                    )
                  : (
                    <p>
                      Lugar: <b>{site}</b>
                    </p>
                    )
              }
            </div>
            <div className='fnd-ui-cardevent__alliance'>
              <img src={allianceImg} alt="alliance icon" />
              <p>
                En alianza con: <b>{alliance}</b>
              </p>
            </div>
            <div className='fnd-ui-cardevent__addressed-to'>
              <img src={addressed} alt="addressed icon" />
              <p>
                Dirigido a: <b>{addressedTo}</b>
              </p>
            </div>
            <div className='fnd-ui-cardevent--flex fnd-ui-cardevent--justify-between fnd-ui-cardevent--items-center'>
              <a className='fnd-ui-cardevent__button' href={moreInformationLink} target={target}>
                Más información
              </a>
              <button className='fnd-ui-cardevent__button' onClick={onClick}>
                Agregar al calendario
              </button>
            </div>
          </div>
          {cardTitle &&
            (
              <div className='fnd-ui-cardevent__card-title fnd-ui-cardevent__card-title--left'>
                {cardTitle}
              </div>
            )
          }
        </div>
        )
      : (
        <div className='fnd-ui-cardevent__container fnd-ui-cardevent__container--small'>
          <div className='fnd-ui-cardevent__details fnd-ui-cardevent__details--small'>
            <h3 className='fnd-ui-cardevent__title'>
              {title}
            </h3>
            <p className='fnd-ui-cardevent__description'>
              {description}
            </p>
            <div className='fnd-ui-cardevent__date'>
              <img src={calendar} alt="calendar icon" />
              <p>
                Fecha: <b>{date}</b>
              </p>
            </div>
            <div className='fnd-ui-cardevent__site'>
              <img src={locationImg} alt="location icon" />
              {
                virtualLink
                  ? (
                    <p>
                      Lugar: <b>Evento virtual (<a href={virtualLink} target="_blank" rel="noreferrer">Enlace aquí</a>)</b>
                    </p>
                    )
                  : (
                    <p>
                      Lugar: <b>{site}</b>
                    </p>
                    )
              }
            </div>
            <div className='fnd-ui-cardevent__alliance'>
              <img src={allianceImg} alt="alliance icon" />
              <p>
                En alianza con: <b>{alliance}</b>
              </p>
            </div>
            <div className='fnd-ui-cardevent__addressed-to'>
              <img src={addressed} alt="addressed icon" />
              <p>
                Dirigido a: <b>{addressedTo}</b>
              </p>
            </div>
            <div className='fnd-ui-cardevent--flex fnd-ui-cardevent--justify-between fnd-ui-cardevent--items-center'>
              <a className='fnd-ui-cardevent__button' href={moreInformationLink} target={target}>
                Más información
              </a>
              <button className='fnd-ui-cardevent__button' onClick={onClick}>
                Agregar al calendario
              </button>
            </div>
          </div>
          {cardTitle &&
            (
              <div className='fnd-ui-cardevent__card-title fnd-ui-cardevent__card-title--right'>
                {cardTitle}
              </div>
            )
          }
        </div>
        )
  )
}

export default CardEvent
