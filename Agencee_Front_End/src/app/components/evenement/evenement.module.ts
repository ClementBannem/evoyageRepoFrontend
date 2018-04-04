import { SharedModule } from "../../shared/shared.module";
import { EvenementComponent } from "./evenement.component";
import { EvenementRoutes } from "./evenement.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EvenementRoutes),
    SharedModule,
    
  ],
  declarations: [EvenementComponent]
})
export class EvenementModule { }
