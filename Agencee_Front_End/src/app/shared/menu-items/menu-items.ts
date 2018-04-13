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
        type: 'link',
        icon: 'ti-new-window',
      },      
      {
        state: 'recherche',
        name: 'Recherche',
        type: 'sub',
        icon: 'ti-search',
        children:[
          {
            state: 'client-recherche',
            name: 'Client'
          },
          {
            state: 'evenement-recherche',
            name: 'Evenement'
          },
          {
            state: 'hebergement-recherche',
            name: 'Hebergement'
          }
        ]
      },
      {
      state: 'transport',
        name: 'Voyages',
        type: 'link',
        icon: 'ti-direction-alt'
      },
      {
      state: 'evenement',
        name: 'Evenements',
        type: 'link',
        icon: 'ti-bookmark'
      },
      {
      state: 'offre',
        name: 'Offre',
        type: 'link',
        icon: 'ti-gift'
      },
      {
      state: 'hebergement',
        name: 'Hebergement',
        type: 'link',
        icon: 'ti-home'
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
//      {
//        state: 'fiche-client',
//        name: 'Fiche Client',
//        type: 'link',
//        icon: 'ti-bookmark-alt'
//      },
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
