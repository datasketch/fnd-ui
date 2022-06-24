import CardColumn from '.'

export default {
  title: 'CardElement',
  component: CardColumn
}
const pa = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'
const img = 'https://picsum.photos/288/224'
export const cardColumn = () => <CardColumn title='La Cumbre de gobernadores y la sostenibilidad' anchorLabel='Leer columna' image={img} href='https://www.google.com'>
  <span>Columnas del director</span>
  <p>{pa}</p>
</CardColumn>
