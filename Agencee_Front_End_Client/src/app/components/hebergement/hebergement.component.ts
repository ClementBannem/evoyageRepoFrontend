import { Camping } from "../../model/model.camping";
import {Gite} from "../../model/model.gite";
import { Residence_Hoteliere } from "../../model/model.residenceHoteliere";
import { CampingService } from "../../services/camping.service";
import {GiteService} from "../../services/gite.service";
import { ResidenceHoteliereService } from "../../services/residence-hoteliere.service";
import { ViewEncapsulation } from "@angular/core";
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HebergementComponent implements OnInit {
  errorMessage: string;

  gites: Gite[];
  gite: Gite = new Gite();
  g: Gite[];
  
  campings: Camping[];
  camping: Camping = new Camping();
  c: Camping[];
  
  residences: Residence_Hoteliere[];
  residence: Residence_Hoteliere = new Residence_Hoteliere();
  r: Residence_Hoteliere[];
  
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  constructor(private residenceService: ResidenceHoteliereService,private giteService: GiteService
    ,private campingService: CampingService, public router: Router, private modalService: NgbModal
    , private toastyService: ToastyService) {}

  ngOnInit(): void {
    this.getGites();
    this.getCampings();
    this.getResidenceHotelieres();
    
  }

  // Debut traitement Gite

  verG(gite: Gite, modal) {
    g => this.g = g;
    this.modalService.open(modal, {size: 'lg'});
  }

  saveGite(options) {
    this.giteService.createGite(this.gite).subscribe(data => {
      this.toastyService.success(toastOptions);
      this.goBack();
      
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

  getGites() {
    this.giteService.getGites().then(gites => this.gites = gites);
  }

  // Fin traitement Gite
  
  // Debut traitement Camping

  verC(camping: Camping, modal) {
    c => this.c = c;
    this.modalService.open(modal, {size: 'lg'});
  }

  saveCamping(options) {
    this.campingService.createCamping(this.camping).subscribe(data => {
      this.toastyService.success(toastOptions);
      this.goBack();
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

  getCampings() {
    this.campingService.getCampings().then(campings => this.campings = campings);
  }

  // Fin traitement Camping
  
  // Debut traitement Residence

  verR(residence: Residence_Hoteliere, modal) {
    r => this.r = r;
    this.modalService.open(modal, {size: 'lg'});
  }

  saveResidence(options) {
    this.residenceService.createResidenceHoteliere(this.residence).subscribe(data => {
      this.toastyService.success(toastOptions);
      this.goBack();
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

  getResidenceHotelieres() {
    this.residenceService.getResidenceHotelieres().then(residences => this.residences = residences);
  }

  // Fin traitement Residence
  
  goBack(): void {
    window.location.replace('/hebergement');
  }
}



