
import CardEvent from '.'

export default {
  title: 'CardEvent',
  component: CardEvent
}

export const Primary = () => <CardEvent
  title='Retos y oportunidades de la Federación Nacional de Departamentos en 2022'
  description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
  virtualLink='https://www.google.com'
  srcImage='https://picsum.photos/id/10/463/433'
  cardTitle='Evento en línea'
  date='Jueves, 24 de marzo de 2022, 4:00pm'
  site='Evento virtual'
  moreInformationLink='https://www.datasketch.co/'
  alliance='Ministerio del Interior'
  addressedTo='Todo publico'
  target='_blank'
  onClick={() => console.log('click')}
/>
export const secondary = () => <CardEvent
  title='Retos y oportunidades de la Federación Nacional de Departamentos en 2022'
  description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
  virtualLink='https://www.google.com'
  cardTitle='Evento en línea'
  date='Jueves, 24 de marzo de 2022, 4:00pm'
  site='Evento virtual'
  moreInformationLink='https://www.datasketch.co/'
  alliance='Ministerio del Interior'
  addressedTo='Todo publico'
/>
