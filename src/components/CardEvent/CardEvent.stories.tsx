
import CardEvent from '.'

export default {
  title: 'CardEvent',
  component: CardEvent
}

export const Primary = () => <CardEvent
  title='Retos y oportunidades de la Federación Nacional de Departamentos en 2022'
  description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
  href='https://www.google.com'
  image='https://picsum.photos/id/10/463/433'
  titleImage='Evento en línea'
  date='Jueves, 24 de marzo de 2022, 4:00pm'
  location='Evento virtual'
  linkEvent='https://www.datasketch.co/'
  alliance='Ministerio del Interior'
  audience='Todo publico'
  onClick={() => console.log('click')}
/>
export const secondary = () => <CardEvent
  title='Retos y oportunidades de la Federación Nacional de Departamentos en 2022'
  description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
  href='https://www.google.com'
  cardTitle='Evento en línea'
  date='Jueves, 24 de marzo de 2022, 4:00pm'
  location='Evento virtual'
  linkEvent='https://www.datasketch.co/'
  alliance='Ministerio del Interior'
  audience='Todo publico'
/>
