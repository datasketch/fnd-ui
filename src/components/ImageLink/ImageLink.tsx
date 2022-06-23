import React from 'react'
import { ImageLinkProps } from './ImageLink.types'
import '../../sass/main.scss'

const ImageLink: React.FC<ImageLinkProps> = ({ src, href, target = '_self', label }) => {
  return (
  <div className='fnd-ui-imagelink__container'>
    <div className='fnd-ui-imagelink__panel'>
        <img className='fnd-ui-imagelink__image' src={src} alt={`${label} image`} />
        <a className='fnd-ui-imagelink__link' href={href} target={target}>
            &#10230;
        </a>
    </div>
    <p className='fnd-ui-imagelink__label'>
        {label}
    </p>
  </div>
  )
}

export default ImageLink
