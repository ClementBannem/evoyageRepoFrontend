import { FicheClientComponent } from "./fiche-client.component";
import { Routes } from '@angular/router';


export const FicheClientRoutes: Routes = [{
    path: '',
    component: FicheClientComponent,
    data: {
        breadcrumb: 'Fiche Client'
    }
}];
