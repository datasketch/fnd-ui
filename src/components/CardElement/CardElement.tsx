import React from 'react'
import { CardElementProps } from './CardElement.types'
import './CardElement.scss'

const CardElement: React.FC<CardElementProps> = ({ title, titleAlign, childrenAlign, image, imageBorderRadius, anchorLabel, children, href, alt }) => {
  return (
    <div className='fnd-ui-CardElement-container'>
        <div className='fnd-ui-CardElement-image-container'>
        <img className='fnd-ui-CardElement-image' style={{
          borderRadius: `${imageBorderRadius}%`
        }} src={image} alt={alt} />
      </div>

        <h2 className='fnd-ui-CardElement-title' style={{
          textAlign: titleAlign
        }}>{title}</h2>

      <div style={{ textAlign: childrenAlign }} >
       {children}
      </div>

      {
        anchorLabel && (
        <div className='fnd-ui-CardElement-anchorLabel-container'>
          <a className='fnd-ui-CardElement-anchorLabel' href={href} > {anchorLabel} </a>
        </div>
        )}
    </div>
  )
}

export default CardElement
