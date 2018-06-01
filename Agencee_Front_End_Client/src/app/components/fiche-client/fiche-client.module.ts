import { SharedModule } from "../../shared/shared.module";
import { FicheClientComponent } from "./fiche-client.component";
import { FicheClientRoutes } from "./fiche-client.routing";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FicheClientRoutes),
    SharedModule
  ],
  declarations: [FicheClientComponent]
})
export class FicheClientModule { }
