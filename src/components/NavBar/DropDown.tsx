import { useState } from 'react'
import arrow from '../../img/arrow.png'

// const DropDown: ReactComponentElement <DropDownProps> = ({ data }) => {
function DropDown ({ label, link, children }): JSX.Element {
  const [dropdownState, setDropdownState] = useState(false)

  const handleClick = () => {
    setDropdownState(!dropdownState)
  }

  return (
      <li className={dropdownState ? 'Dropdown-container active' : 'Dropdown-container'} onClick={handleClick} /* onMouseEnter={() => setDropdownState(true)} onMouseLeave={() => setDropdownState(false)} */>
            <div className={dropdownState ? 'Dropdown-label--active' : 'Dropdown-label'}>
              <span>{label}</span>
              <img src={arrow} style={{
                width: '12px',
                height: '8px'
              }} />
            </div>
    <ul className={dropdownState ? ' Dropdowm-option--active' : 'Dropdowm-option'}>
          <div className='Dropdowm-option-bar' />
             {
                 children.map((item, index) => {
                   return (
                       <li className='DropDowm-option-item' key={index}><a href={item.link}>{item.label}</a></li>
                   )
                 })}
             </ul>
    </li>

  )
}

export default DropDown
