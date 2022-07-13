export interface NewsProps {
    date: string,
    src: string,
    title: string,
    description: string,
    href: string,
    target?: '_blank' | '_self' | '_parent' | '_top'
}
