import { SharedModule } from "../../shared/shared.module";
import { CampingComponent } from "./camping/camping.component";
import { GiteComponent } from "./gite/gite.component";
import { HebergementComponent } from "./hebergement.component";
import { HebergementRoutes } from "./hebergement.routing";
import { ResidenceHoteliereComponent } from "./residence-hoteliere/residence-hoteliere.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PopoverModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HebergementRoutes),
    SharedModule,
    PopoverModule.forRoot()
  ],
  declarations: [HebergementComponent, CampingComponent, GiteComponent, ResidenceHoteliereComponent]
})
export class HebergementModule { }