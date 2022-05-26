import React from 'react'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button type="button" onClick={onClick}>{text}</button>
}

export default Button
