import { SharedModule } from "../../shared/shared.module";
import { ListeclientsComponent } from "./listeclients.component";
import { ListeclientsRoutes } from "./listeclients.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListeclientsRoutes),
    SharedModule
  ],
  declarations: [ListeclientsComponent]
})
export class ListeclientsModule { }
