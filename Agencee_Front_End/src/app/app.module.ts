import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutes} from './app.routing';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {SharedModule} from './shared/shared.module';
import {BreadcrumbsComponent} from './layouts/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';

import {routing} from './app.routing';
import {AccountService} from './services/account.service';
import {AuthService} from './services/auth.service';
import { AutocarService } from "./services/autocar.service";
import { AvionService } from "./services/avion.service";
import { BateauService } from "./services/bateau.service";
import {ClientService} from "./services/client.service";
import { EvenementService } from "./services/evenement.service";
import { OffreService } from "./services/offre.service";
import { TrainService } from "./services/train.service";
import {UrlPermission} from './urlPermission/url.permission';
import { PathLocationStrategy } from "@angular/common";
import { LocationStrategy } from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,    
    
        

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    ScrollModule,
    routing
  ],
  exports: [ScrollModule],
  providers: [AuthService, ClientService,BateauService, AvionService,OffreService, AutocarService, TrainService,EvenementService, AccountService, UrlPermission,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
