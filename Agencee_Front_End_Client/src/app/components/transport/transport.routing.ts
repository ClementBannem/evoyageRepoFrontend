import {AutocarComponent } from "./autocar/autocar.component";
import {AvionComponent} from "./avion/avion.component";
import {BateauComponent} from "./bateau/bateau.component";
import {TrainComponent} from "./train/train.component";

//import {TransportComponent} from "./transport.component";
import {Routes} from "@angular/router";

export const TransportRoutes: Routes = [
  {
    path: '',
    //component: TransportComponent,
    data: {
      breadcrumb: 'Voyages Disponibles',
      icon: 'icofont-home bg-c-blue',
      status: false
    }, 
    children: [
      {
        path: 'bateau',
        component: BateauComponent,
        data: {
          breadcrumb: 'Bateau',
          status: true

        }
      }, {
        path: 'train',
        component: TrainComponent,
        data: {
          breadcrumb: 'Train',
          status: true

        }
      }, {
        path: 'avion',
        component: AvionComponent,
        data: {
          breadcrumb: 'Avion',
          status: true

        }
      }, {
        path: 'autocar',
        component: AutocarComponent,
        data: {
          breadcrumb: 'Autocar',
          status: true

        }
      }
    ]
  }
]