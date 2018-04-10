import { CampingComponent } from "./camping/camping.component";
import { GiteComponent } from "./gite/gite.component";
import { HebergementComponent } from "./hebergement.component";
import { ResidenceHoteliereComponent } from "./residence-hoteliere/residence-hoteliere.component";
import { Routes } from "@angular/router";

export const HebergementRoutes: Routes = [
  {
    path: '',
    component: HebergementComponent,
    data: {
      breadcrumb: 'Hebergement',
      icon: 'icofont-home bg-c-blue',
      status: true
    }, children: [
            {
                path: 'camping',
                component: CampingComponent,
                data: {
                    breadcrumb: 'Camping',
                  
                }
            }, {
                path: 'gite',
                component: GiteComponent,
                data: {
                    breadcrumb: 'Gite',
                  
                }
            }, {
                path: 'residence-hoteliere',
                component: ResidenceHoteliereComponent,
                data: {
                    breadcrumb: 'Residence Hoteliere',
                  
                }
            }]
  }
]