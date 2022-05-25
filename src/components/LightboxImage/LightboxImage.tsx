import React from 'react'
import { LightboxImageProps } from './LightboxImage.types'

const LightboxImage: React.FC<LightboxImageProps> = ({ src, alt }) => {
  return (<div className='fnd-ui-lightbox-container'>
    <img className='fnd-ui-lightbox-image' src={src} alt={alt} />
  </div>)
}

export default LightboxImage
