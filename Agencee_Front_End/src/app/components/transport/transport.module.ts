
import { SharedModule } from "../../shared/shared.module";
import { BateauComponent } from "./bateau/bateau.component";
import { TransportComponent } from "./transport.component";
import { TransportRoutes } from "./transport.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AutocarComponent } from './autocar/autocar.component';
import { PopoverModule } from "ngx-bootstrap";
import { AvionComponent } from './avion/avion.component';
import { TrainComponent } from './train/train.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TransportRoutes),
    SharedModule,
    PopoverModule.forRoot()
  ],
  declarations: [TransportComponent, BateauComponent, AutocarComponent, AvionComponent, TrainComponent]
})
export class TransportModule { }
