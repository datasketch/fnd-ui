export interface CardColumnProps {
    image:string,
    title: string,
    subtitle:string,
    description: string
    href?: string,
    alt?:string
    target?: '_blank' | '_self' | '_parent' | '_top'
}
