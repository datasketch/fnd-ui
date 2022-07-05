
export interface NavBarProps {
  image: string,
  dataNavBar: [
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
