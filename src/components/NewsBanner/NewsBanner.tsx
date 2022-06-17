import React from 'react'
import { INewsBannerProps } from './NewsBanner.types'
import './NewsBanner.scss'

const NewsBanner: React.FC<INewsBannerProps> = ({ title, description, href, target = '_self', src }) => {
  return (
        <div className='fnd-ui-newsbanner-container'>
            <div className='fnd-ui-newsbanner-left'>
                <p>
                    Novedades
                </p>
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
                <a href={href} target={target}>
                    Ir a la noticia
                </a>
            </div>
            <div className='fnd-ui-newsbanner-right'>
                <img src={src} alt='Noticia' />
            </div>
        </div>
  )
}

export default NewsBanner
