/* eslint-disable react/no-children-prop */
import React, { useState } from 'react'
import { NavBarProps } from './NavBar.types'
// import bars from '../../img/bars-solid.svg'
// import xmark from '../../img/xmark-solid.svg'
import DropDown from './DropDown'
const bars = require('../../img/bars-solid.svg')
const xmark = require('../../img/xmark-solid.svg')

const NavBar: React.FC<NavBarProps> = ({ image, data }) => {
  const [menuOpen, setMenuopen] = useState(false)

  const handleState = () => {
    setMenuopen((prevState) => !prevState)
  }
  return (
    <div>
      <div className='fnd-ui-Navbar-desktop-container'>
        {/* Desktop */}
        <div className='fnd-ui-Navbar-desktop-image'>
          <img src={image} alt='fnd image' />
        </div>
        <div className='fnd-ui-Navbar-desktop-menu'>
          {data.map((item, index) => {
            if (!item.children) {
              return (<li key={index} className='fnd-ui-Navbar-Desktop-submenu-item'>
                <a href={item.link} className='fnd-ui-Navbar-Desktop-submenu-item-link'>{item.label}</a>
              </li>)
            }
            return <DropDown key={index} label={item.label} link={item.link} children={item.children} />
          }
          )}
          <div className='fnd-ui-Navbar-desktop-paymentbutton'><a href='#'>Boton de pagos</a></div>
        </div>
      </div>
      <nav>
        <div className='fnd-ui-Navbar-mobile-container'>
          {/* Mobile */}
          <div className='fnd-ui-Navbar-mobile-image'>
            <img src={image} alt='fnd image' />
          </div>
          <div className='fnd-ui-Navbar-mobile-menu'>
            <div onClick={handleState} >
              <img src={menuOpen ? xmark : bars} style={{
                width: '35px',
                height: '35px'
              }} />
            </div>
          </div>
          <ul className={`fnd-ui-Navbar-mobile-submenu ${menuOpen && 'fnd-ui-Navbar-mobile-submenu--active'}`} >
            {data.map(({ children, label, link }, index) => {
              if (children) {
                return (
                  <DropDown key={index} label={label} link={link} children={children} />
                )
              }
              return (
                <li key={index} className='fnd-ui-Navbar-mobile-submenu-item'>
                  <a href={link} className='fnd-ui-Navbar-mobile-submenu-item-link'>{label}</a>
                </li>
              )
            })}
            <div className='fnd-ui-Navbar-mobile-paymentbutton'><a href='#'>Boton de pagos</a></div>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
