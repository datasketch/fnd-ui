import React from 'react'
import { ButtonProps } from './Button.types'
import '../../index.css'

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button type="button" onClick={onClick}>{text}</button>
}

export default Button
