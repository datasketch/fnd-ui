import React from 'react'
export interface CardElementProps {
    title: string,
    titleAlign?: 'left' | 'center' | 'right',
    image?: string,
    imageBorderRadius?: string,
    childrenAlign?: 'left' | 'center' | 'right',
    children?: React.ReactNode,
    anchorLabel?: string,
    href?: string,
    alt?: string,
}
