import React from 'react'

export interface CardEventProps {
  title: string,
  cardTitle?: string,
  image?: string,
  titleImage?: string,
  description: string,
  children?: React.ReactNode,
  href: string,
  alt?: string,
  fecha?: string,
  lugar?: string,
  linkEvento?: string,
  alianza?: string,
  dirigido?: string,
}
