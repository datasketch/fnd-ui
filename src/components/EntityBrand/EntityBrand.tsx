import React from 'react'
import { EntityBrandProps } from './EntityBrand.types'

const EntityBrand: React.FC<EntityBrandProps> = ({ src }) => {
  return (
    <div className='fnd-ui-entitybrand__container'>
        <img className='fnd-ui-entitybrand__image' src={src} alt="" />
    </div>
  )
}

export default EntityBrand
