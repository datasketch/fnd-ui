import React from 'react'

export interface BannerBrandProps {
    bg: string;
    lead: string;
    title: string;
    anchorLabel: string;
    watermark?: string;
    href: string;
    target: '_blank' | '_self' | '_parent' | '_top',
    children: React.ReactNode;
}
