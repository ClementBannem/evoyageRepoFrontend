

import { AutocarComponent } from "./autocar/autocar.component";
import { AvionComponent } from "./avion/avion.component";
import { BateauComponent } from "./bateau/bateau.component";
import { TrainComponent } from "./train/train.component";

import { TransportComponent } from "./transport.component";
import { Routes } from "@angular/router";

export const TransportRoutes: Routes = [
  {
    path: '',
    component: TransportComponent,
    data: {
      breadcrumb: 'Voyages',
      icon: 'icofont-home bg-c-blue',
      status: true
    }, children: [
            {
                path: 'bateau',
                component: BateauComponent,
                data: {
                    breadcrumb: 'Bateau',
                  
                }
            }, {
                path: 'autocar',
                component: AutocarComponent,
                data: {
                    breadcrumb: 'AutoCar',
                  
                }
            }, {
                path: 'train',
                component: TrainComponent,
                data: {
                    breadcrumb: 'Train',
                  
                }
            }, {
                path: 'avion',
                component: AvionComponent,
                data: {
                    breadcrumb: 'Avion',
                  
                }
            }]
  }
]