
export interface NavBarProps {
  image: string,
  data: [
    {
      label: string,
      link: string,
      children: [{
        label: string,
        link: string,
      }]
    }
  ]
}
