import { AutoCar } from "../../model/model.autocar";
import { Avion } from "../../model/model.avion";
import { Bateau } from "../../model/model.bateau";
import { Train } from "../../model/model.train";
import { AutocarService } from "../../services/autocar.service";
import { AvionService } from "../../services/avion.service";
import { BateauService } from "../../services/bateau.service";
import { TrainService } from "../../services/train.service";
import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Input } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ViewEncapsulation } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastyService } from "ng2-toasty";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransportComponent implements OnInit {
  bateau:Bateau = new Bateau();
   b: Bateau[];
   bateaux: Bateau[];
  avion:Avion = new Avion();
  a: Avion[];
  autocar:AutoCar = new AutoCar();
  ac:AutoCar[];
  train:Train = new Train();
  t:Train[];
   @Input('show-modal') showModal: boolean;
   @Output('closed') closeEmitter: EventEmitter < ModalResult > = new EventEmitter < ModalResult > ();
  //@Output('loaded') loadedEmitter: EventEmitter < Modal > = new EventEmitter < Modal > ();
  @Output() positiveLabelAction = new EventEmitter();

  constructor(private bateauService: BateauService,private trainService: TrainService,private autocarService:AutocarService, private avionService: AvionService, public router: Router, private modalService: NgbModal, private toastyService: ToastyService) {}

  ngOnInit() {
  }
 // traitement bateau
  ver(bateau: Bateau, modal) {
    b => this.b = b;
    this.modalService.open(modal, {size: 'lg'});
  }
  save(){
    this.bateauService.createBateau(this.bateau).subscribe(data =>{
      this.router.navigate(['/components/transport']);
    });
  }
  
  getBateau() {
     this.bateauService.getBateau().then(bateaux => this.bateaux = bateaux);
  }

cancelAction() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.CANCEL
    });
    return false;
  }
  // traitement avion
  
  verA(avion: Avion, modal) {
    a => this.a = a;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveAv(){
    this.avionService.createAvion(this.avion).subscribe(data =>{
      this.router.navigate(['/components/transport']);
    });
  }
  
  // traitement autocar
   verAC(autocar: AutoCar, modal) {
    ac => this.ac = ac;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveAC(){
    this.autocarService.createAutocar(this.autocar).subscribe(data =>{
      this.router.navigate(['/components/transport']);
    });
  }
  
  // traitement train
   verT(tain: Train, modal) {
    t => this.t = t;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveT(){
    this.trainService.createTrain(this.train).subscribe(data =>{
      this.router.navigate(['/components/transport']);
    });
  }

}
  
export enum ModalAction { POSITIVE, CANCEL }

export interface ModalResult {
  action: ModalAction;
}