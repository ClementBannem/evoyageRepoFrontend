import {AutoCar} from "../../model/model.autocar";
import {Avion} from "../../model/model.avion";
import {Bateau} from "../../model/model.bateau";
import {Train} from "../../model/model.train";
import {AutocarService} from "../../services/autocar.service";
import {AvionService} from "../../services/avion.service";
import {BateauService} from "../../services/bateau.service";
import {TrainService} from "../../services/train.service";
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ViewEncapsulation} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransportComponent implements OnInit {
  autocars: AutoCar[];
  autocar: AutoCar = new AutoCar();
  ac: AutoCar[];

  avions: Avion[];
  avion: Avion = new Avion();
  a: Avion[];

  train: Train = new Train();
  t: Train[];
  trains: Train[];

  bateau: Bateau = new Bateau();
  b: Bateau[];
  bateaux: Bateau[];
  
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  errorMessage: string;

  constructor(private bateauService: BateauService, private trainService: TrainService, private autocarService: AutocarService
    , private avionService: AvionService, public router: Router, private modalService: NgbModal, private toastyService: ToastyService) {}

  ngOnInit(): void {
    this.getAutocars();
    this.getAvions();
    this.getBateaux();
    this.getTrains();
  }
  // traitement bateau
  ver(bateau: Bateau, modal) {
    b => this.b = b;
    this.modalService.open(modal, {size: 'lg'});
  }
  save(options) {
    this.bateauService.createBateau(this.bateau).subscribe(data => {
      this.toastyService.success(toastOptions);
    });
    // Notification //
    
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };
  }

  getBateaux() {
    this.bateauService.getBateau().then(bateaux => this.bateaux = bateaux);
  }

  deleteBateau(ba) {
    this.bateauService.deleteBateau(ba.id).subscribe((data) => {
      this.bateaux.splice(this.bateaux.indexOf(ba), 1);
    }, (error) => {
      console.log(error);
    });
  }
  
  // traitement avion

  verA(avion: Avion, modal) {
    a => this.a = a;
    this.modalService.open(modal, {size: 'lg'});
  }
  
  saveAv(options) {
    this.avionService.createAvion(this.avion).subscribe(data => {
      this.toastyService.success(toastOptions);
    });
    // Notification //
    
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };
  }

  getAvions() {
    this.avionService.getAvions().then(avions => this.avions = avions);
  }

  // traitement autocar
  verAC(autocar: AutoCar, modal) {
    ac => this.ac = ac;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveAC(options) {
    this.autocarService.createAutocar(this.autocar).subscribe(data => {
      this.toastyService.success(toastOptions);
    });
    // Notification //
    
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };
  }
  getAutocars() {
    this.autocarService.getAutocars().then(autocars => this.autocars = autocars);
  }
  deleteAutocar(au) {
    this.autocarService.deleteAutocar(au.id).subscribe((data) => {
      this.autocars.splice(this.autocars.indexOf(au), 1);
    }, (error) => {
      console.log(error);
    });
  }

  // traitement train
  verT(tain: Train, modal) {
    t => this.t = t;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveT(options) {
    this.trainService.createTrain(this.train).subscribe(data => {
      this.toastyService.success(toastOptions);
    });
    // Notification //
    
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };
  }
  getTrains() {
    this.trainService.getTrains().then(trains => this.trains = trains);
  }

}



