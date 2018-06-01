import { SharedModule } from "../../shared/shared.module";
import { OffreComponent } from "./offre.component";
import { OffreRoutes } from "./offre.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OffreRoutes),
    SharedModule,
    
  ],
  declarations: [OffreComponent]
})
export class OffreModule { }
