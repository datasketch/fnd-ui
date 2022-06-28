import React from 'react'
import { ImageLinkProps } from './ImageLink.types'
const imageSrc = require('../../img/image-link-arrow.svg')

const ImageLink: React.FC<ImageLinkProps> = ({ src, href, target = '_self', label }) => {
  return (
  <div className='fnd-ui-imagelink__container'>
    <div className='fnd-ui-imagelink__panel'>
        <img className='fnd-ui-imagelink__image' src={src} alt={`${label} image`} />
        <a className='fnd-ui-imagelink__link' href={href} target={target}>
            <img src={imageSrc} alt="image arrow link icon" />
        </a>
    </div>
    <p className='fnd-ui-imagelink__label'>
        {label}
    </p>
  </div>
  )
}

export default ImageLink
