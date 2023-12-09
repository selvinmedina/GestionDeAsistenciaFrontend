import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Opciones'
  },
  {
    name: 'Control de Visitas',
    url: '/visitas/control',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Notificar Visita',
    url: '/visitas/notificar',
    iconComponent: { name: 'cil-bell' }
  },
];
