import CardElement from '.'

export default {
  title: 'CardElement',
  component: CardElement
}
const pa = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'
const img = 'https://picsum.photos/288/224'
export const cardColumn = () => <CardElement title='La Cumbre de gobernadores y la sostenibilidad' anchorLabel='Leer columna' image={img} href='https://www.google.com'>
  <span>Columnas del director</span>
  <p>{pa}</p>
</CardElement>

export const cardProfile = () => <CardElement
  title='Luis Calderon'
  titleAlign='center'
  image={img}
  childrenAlign='center'
  imageBorderRadius='50'
  href='google.com'
>
  <span style={{
    padding: 0,
    margin: 0
  }}>Jefatura de Convenios</span>
  <p
    style={{
      padding: 0,
      margin: 0
    }}><b>coordinacio@fnd.co</b></p>

</CardElement>
