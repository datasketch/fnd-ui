/* eslint-disable react/function-component-definition */
import NavBar from '.'
import image from '../../img/navbar-icon.png'
export default {
  title: 'NavBar',
  component: NavBar
}

const data = [
  {
    label: 'Federacion',
    children: [
      {
        label: 'Quiénes somos',
        link: '/federacion/quienes-somos'
      }, {
        label: 'Organigrama',
        link: '/federacion/organigrama'
      },
      {
        label: 'Presidente',
        link: '/federacion/presidente'
      },
      {
        label: 'Director ejecutivo',
        link: '/federacion/director-ejecutivo'
      },
      {
        label: 'Subdirecciones',
        link: '/federacion/subdirecciones'
      },
      {
        label: 'Directorio',
        link: '/federacion/directorio'
      }
    ],
    link: '/federacion'
  },
  {
    label: 'Departamentos',
    link: '/departamentos'
  },
  {
    label: 'Prensa',
    children: [{
      label: 'Boletines de prensa',
      link: '/prensa/boletines-de-prensa'
    },
    {
      label: 'Calendario',
      link: '/prensa/calendario'
    },
    {
      label: 'Gobernadores en acción',
      link: '/prensa/gobernadores-en-accion'
    },
    {
      label: 'Videoteca',
      link: '/prensa/videoteca'
    }],
    link: '/prensa'
  },
  {
    label: 'Sistemas de información',
    children: [{
      label: 'Anticontrabando',
      link: '/sistemas-de-informacion/anticontrabando'
    },
    {
      label: 'Fondo Cuenta',
      link: '/sistemas-de-informacion/fondo-cuenta'
    },
    {
      label: 'SIANCO',
      link: '/sistemas-de-informacion/sianco'
    },
    {
      label: 'ORCA',
      link: '/sistemas-de-informacion/orca'
    }],
    link: '/sistemas-de-informacion'
  },
  {
    label: 'Transparencia',
    link: '/transparencia'
  },
  {
    label: 'Atención al ciudadano',
    link: '/atencion-al-ciudadano'
  }
]
export const Primary = () => <NavBar data={data} image={image} />
