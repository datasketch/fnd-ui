import React from 'react'
import { EntityBrandProps } from './EntityBrand.types'
import './EntityBrand.scss'

const EntityBrand: React.FC<EntityBrandProps> = ({ src }) => {
  return (
    <div className='fnd-ui-entitybrand-container'>
        <img className='fnd-ui-entitybrand-image' src={src} alt="" />
    </div>
  )
}

export default EntityBrand
