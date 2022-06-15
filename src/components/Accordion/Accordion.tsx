import React, { useState } from 'react'
import { AccordionProps } from './Accordion.types'
import './Accordion.scss'

const Accordion: React.FC<AccordionProps> = ({ title, description, isActive = false }) => {
  const [isOpen, setIsOpen] = useState(isActive)
  return (
        <div className='fnd-ui-accordion-container'>
            <button onClick={() => setIsOpen(!isOpen)} className='fnd-ui-accordion-button'>
                <p className={isOpen ? 'active' : ''}>
                    &#8595;
                </p>
                <h3 className={isOpen ? 'active' : ''}>
                    {title}
                </h3>
            </button>
            <div className={`fnd-ui-accordion-panel ${isOpen ? 'active' : ''}`}>
                <p>
                    {description}
                </p>
            </div>
        </div>
  )
}

export default Accordion
