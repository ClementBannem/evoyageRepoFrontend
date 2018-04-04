import { OffreComponent } from "./offre.component";
import { Routes } from "@angular/router";



export const OffreRoutes: Routes = [{
    path: '',
    component: OffreComponent,
    data: {
        breadcrumb: 'Offres'
    }
}];
