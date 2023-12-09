import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Opciones'
  },
  {
    name: 'Control de Visitas',
    url: '/theme/typography',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Notificar Visita',
    url: '/visitas/notificar',
    iconComponent: { name: 'cil-bell' }
  },
  {
    name: 'Historial de visitas',
    url: '/theme/historialVisitas',
    iconComponent: { name: 'cil-cursor' }
  },
];
