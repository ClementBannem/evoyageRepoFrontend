import { ListeclientsComponent } from "./listeclients.component";
import { Routes } from "@angular/router";




export const ListeclientsRoutes: Routes = [{
    path: '',
    component: ListeclientsComponent,
    data: {
        breadcrumb: 'Liste des Clients'
    }
}];
