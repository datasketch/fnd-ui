import React from 'react'
import { BannerBrandProps } from './BannerBrand.types'

const BannerBrand: React.FC<BannerBrandProps> = ({ bg, lead, title, anchorLabel, watermark, href, target = '_self', children }) => {
  return (
        <div className='fnd-ui-bannerbrand__container' style={{ backgroundImage: `url("${bg}")` }}>
            <div className='fnd-ui-bannerbrand__left'>
                <p className='fnd-ui-bannerbrand__lead'>
                    {lead}
                </p>
                <h3 className='fnd-ui-bannerbrand__title'>
                    {title}
                </h3>
                <div className='fnd-ui-bannerbrand__children'>
                    {children}
                </div>
                <a className='fnd-ui-bannerbrand__link' href={href} target={target}>
                    {anchorLabel}
                </a>
            </div>
            <div className='fnd-ui-bannerbrand__right'>
                {
                    watermark &&
                    <img className='fnd-ui-bannerbrand__watermark' src={watermark} alt={lead} />
                }
            </div>
        </div>
  )
}

export default BannerBrand
