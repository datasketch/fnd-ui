import { MouseEventHandler } from 'react'

export interface CardEventProps {
  title: string,
  description: string,
  date: string,
  site: string,
  virtualLink?: string,
  alliance: string,
  addressedTo: string,
  moreInformationLink: string,
  srcImage?: string,
  altImage?: string,
  cardTitle: string,
  target?: '_blank' | '_self' | '_parent' | '_top'
  onClick?: MouseEventHandler<HTMLButtonElement>,
}
