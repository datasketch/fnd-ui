import React from 'react'
import { BannerBrandProps } from './BannerBrand.types'
import './BannerBrand.scss'

const BannerBrand: React.FC<BannerBrandProps> = ({ bg, lead, title, anchorLabel, watermark, href, target = '_self', children }) => {
  return (
        <div className='fnd-ui-bannerbrand-container' style={{ backgroundImage: `url("${bg}")` }}>
            <div className='fnd-ui-bannerbrand-left'>
                <p className='fnd-ui-bannerbrand-lead'>
                    {lead}
                </p>
                <h3 className='fnd-ui-bannerbrand-title'>
                    {title}
                </h3>
                <div className='fnd-ui-bannerbrand-children'>
                    {children}
                </div>
                <a className='fnd-ui-bannerbrand-link' href={href} target={target}>
                    {anchorLabel}
                </a>
            </div>
            <div className='fnd-ui-bannerbrand-right'>
                {
                    watermark &&
                    <img className='fnd-ui-bannerbrand-watermark' src={watermark} alt={lead} />
                }
            </div>
        </div>
  )
}

export default BannerBrand
