import React, { MouseEventHandler } from 'react'

export interface CardEventProps {
  title: string,
  cardTitle?: string,
  image?: string,
  titleImage?: string,
  description: string,
  children?: React.ReactNode,
  href: string,
  alt?: string,
  date?: string,
  location?: string,
  linkEvent?: string,
  alliance?: string,
  audience?: string,
  target?: '_blank' | '_top' | '_parent' | '_self'
  onClick?: MouseEventHandler<HTMLButtonElement>,
}
