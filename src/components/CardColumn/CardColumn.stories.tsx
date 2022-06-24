import CardColumn from '.'

export default {
  title: 'CardColumn',
  component: CardColumn
}
const desc = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'
const img = 'https://picsum.photos/id/1074/286/222'
export const primary = () => <CardColumn title='La Cumbre de gobernadores y la sostenibilidad' image={img} description={desc} subtitle='Columnas del director' href='https://www.google.com'/>
