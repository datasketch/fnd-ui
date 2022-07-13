import CardProfile from '.'

export default {
  title: 'CardProfile',
  component: CardProfile
}
const img = 'https://picsum.photos/id/237/180/180'
const array = [0, 1, 2, 3, 4]
export const Primary = () => array.map((index) => <CardProfile key={index}
  name='Pedro Alberto Pérez Pérez'
  position='Jefatura de Convenios'
  mail=' coordinacion@fnd.co'
  image={img}
/>)
