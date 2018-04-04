import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Elite Voyage Menu',
    main: [
      {
        state: 'dashboard',
        name: 'Tableau de bord',
        type: 'link',
        icon: 'ti-dashboard'
      },
      {
        state: 'basic',
        name: 'Contact',
        type: 'sub',
        icon: 'ti-new-window',
      },      
      {
        state: 'advance',
        name: 'Recherche',
        type: 'link',
        icon: 'ti-search'
      },
      {
      state: 'transport',
        name: 'Voyages',
        type: 'link',
        icon: 'ti-dashboard'
      },
      {
      state: 'evenement',
        name: 'Evenements',
        type: 'link',
        icon: 'ti-dashboard'
      },
      {
      state: 'offre',
        name: 'Offre',
        type: 'link',
        icon: 'ti-dashboard'
      },
    ]
  },
  {
    label: 'Gestion de Clients',
    main: [
      {
        state: 'listeclients',
        name: 'Clients',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'fiche-client',
        name: 'Fiche Client',
        type: 'link',
        icon: 'ti-bookmark-alt'
      },
      {
        state: 'simple-page',
        name: 'Dossiers',
        type: 'link',
        icon: 'ti-folder'
      },      
    ],
  }

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
