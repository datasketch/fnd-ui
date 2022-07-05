import React, { useState } from 'react'
import { AccordionProps } from './Accordion.types'
const imageSrc = require('../../img/accordion-arrow-down.svg')

const Accordion: React.FC<AccordionProps> = ({ title, description, isActive = false }) => {
  const [isOpen, setIsOpen] = useState(isActive)
  return (
        <div className='fnd-ui-accordion__container'>
            <button onClick={() => setIsOpen(!isOpen)} className='fnd-ui-accordion__button'>
                <img src={imageSrc} alt="" className={isOpen ? 'active' : ''} />
                <h3 className={isOpen ? 'active' : ''}>
                    {title}
                </h3>
            </button>
            <div className={`fnd-ui-accordion__panel ${isOpen ? 'active' : ''}`}>
                <p>
                    {description}
                </p>
            </div>
        </div>
  )
}

export default Accordion
