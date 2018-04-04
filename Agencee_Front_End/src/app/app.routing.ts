import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
{
  path: '',
  component: AuthLayoutComponent,
  children: [
  {
      path: '',
      redirectTo: 'authentication/login',
      pathMatch: 'full'
    },
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
  ]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    }, {
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    }, {
      path: 'fiche-client',
      loadChildren: './components/fiche-client/fiche-client.module#FicheClientModule'
    },{
      path: 'listeclients',
      loadChildren: './components/listeclients/listeclients.module#ListeclientsModule'
    },{
      path: 'transport',
      loadChildren: './components/transport/transport.module#TransportModule'
    },
    {
      path: 'evenement',
      loadChildren: './components/evenement/evenement.module#EvenementModule'
    },
     {
      path: 'offre',
      loadChildren: './components/offre/offre.module#OffreModule'
    },
  ]
},  {
  path: '**',
  redirectTo: 'error/404'
}];

export const routing = RouterModule.forRoot(AppRoutes);
