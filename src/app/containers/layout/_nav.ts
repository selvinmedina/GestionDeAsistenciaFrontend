import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Opciones'
  },
  {
    name: 'Usuarios',
    url: '/theme/colors',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Control de Visitas',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-notes' }
  },

  {
    name: 'Roles',
    url: '/theme/roles',
    iconComponent: { name: 'cil-cursor' }
  },
  {
    name: 'Notificar Visita',
    url: '/theme/notificarVisitas',
    iconComponent: { name: 'cil-bell' }
  },
  {
    name: 'Historial de visitas',
    url: '/theme/historialVisitas',
    iconComponent: { name: 'cil-cursor' }
  },
];
