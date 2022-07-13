/* eslint-disable react/function-component-definition */
import News from '.'

export default {
  title: 'News',
  components: News
}

export const Primary = () => <News date='Martes, 22 de marzo de 2022' src='https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-743986.jpg&fm=jpg' title='Avances en el control del consumo de cigarrillos ilegales en Colombia' description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…' href='https://www.datasketch.co/' />

export const Secondary = () => <News date='Martes, 22 de marzo de 2022' src='https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-743986.jpg&fm=jpg' title='Avances en el control del consumo de cigarrillos ilegales en Colombia' description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…' href='https://www.datasketch.co/' target='_self' />
