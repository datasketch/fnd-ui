import React from 'react'
import { ImageLinkProps } from './ImageLink.types'
import './ImageLink.scss'

const ImageLink: React.FC<ImageLinkProps> = ({ src, href, target = '_self', label }) => {
  return (
  <div className='fnd-ui-imagelink-container'>
    <div className='fnd-ui-imagelink-panel'>
        <img className='fnd-ui-imagelink-image' src={src} alt={`${label} image`} />
        <a className='fnd-ui-imagelink-link' href={href} target={target}>
            &#10230;
        </a>
    </div>
    <p className='fnd-ui-imagelink-label'>
        {label}
    </p>
  </div>
  )
}

export default ImageLink
