import { EvenementComponent } from "./evenement.component";
import { Routes } from "@angular/router";

export const EvenementRoutes: Routes = [{
    path: '',
    component: EvenementComponent,
    data: {
        breadcrumb: 'Evenements'
    }
}];
