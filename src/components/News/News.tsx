import React from 'react'
import { NewsProps } from './News.types'
import './News.scss'

const News: React.FC<NewsProps> = ({ date, src, title, description, href, target = '_self' }) => {
  return (
    <div className='fnd-ui-news__container'>
      <p className='fnd-ui-news__date'>
        {date}
      </p>
      <img className='fnd-ui-news__image' src={src} alt="news image" />
      <h3 className='fnd-ui-news__title'>
        {title}
      </h3>
      <p className='fnd-ui-news__description'>
        {description}
      </p>
      <div className='fnd-ui-news--text-center'>
        <a className='fnd-ui-news__link' href={href} target={target}>
          Ir a la noticia
        </a>
      </div>
    </div>
  )
}

export default News
