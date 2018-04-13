import { SharedModule } from "../../shared/shared.module";
import { RechercheComponent } from "./recherche.component";
import { RechercheRoutes } from "./recherche.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EvenementRechercheComponent } from './evenement-recherche/evenement-recherche.component';
import { ClientRechercheComponent } from './client-recherche/client-recherche.component';
import { HebergementRechercheComponent } from './hebergement-recherche/hebergement-recherche.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RechercheRoutes),
    SharedModule,
    
  ],
  declarations: [RechercheComponent, EvenementRechercheComponent, ClientRechercheComponent, HebergementRechercheComponent]
})
export class RechercheModule { }