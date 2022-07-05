/* eslint-disable react/function-component-definition */
import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion
}

export const Primary = () => <Accordion title='Generación de soportes de giros realizados' description='El Fondocuenta genera periodicamente para sus agremiados, las certificaciones de giro realizadas por cada tipo de producto teniendo en cuenta y discriminando todos los conceptos que por ley aplican para cada uno de ellos.' />

export const Secondary = () => <Accordion title='Generación de soportes de giros realizados' description='El Fondocuenta genera periodicamente para sus agremiados, las certificaciones de giro realizadas por cada tipo de producto teniendo en cuenta y discriminando todos los conceptos que por ley aplican para cada uno de ellos.' isActive={true} />
