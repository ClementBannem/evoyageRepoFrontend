import { ClientRechercheComponent } from "./client-recherche/client-recherche.component";
import { EvenementRechercheComponent } from "./evenement-recherche/evenement-recherche.component";
import { HebergementRechercheComponent } from "./hebergement-recherche/hebergement-recherche.component";
//import { RechercheComponent } from "./recherche.component";
import { Routes } from "@angular/router";

export const RechercheRoutes: Routes = [{
    path: '',
    data: {
        breadcrumb: 'Recherche',
      status:false
    },
    children: [
            {
                path: 'client-recherche',
                component: ClientRechercheComponent,
                data: {
                    breadcrumb: 'Recherche de Client',
                    status: true
                }
            }, {
                path: 'evenement-recherche',
                component: EvenementRechercheComponent,
                data: {
                    breadcrumb: 'Recherche d\'evenements',
                    status: true
                }
            }, {
                path: 'hebergement-recherche',
                component: HebergementRechercheComponent,
                data: {
                    breadcrumb: 'Recherche d\'Hebergement',
                    status: true
                }
            }
        ]
}];
