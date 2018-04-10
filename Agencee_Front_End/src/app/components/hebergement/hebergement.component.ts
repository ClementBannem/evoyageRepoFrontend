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
import {ToastyService} from "ng2-toasty";

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

  saveGite() {
    this.giteService.createGite(this.gite).subscribe(data => {
      this.router.navigate(['/components/hebergement']);
    });

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

  saveCamping() {
    this.campingService.createCamping(this.camping).subscribe(data => {
      this.router.navigate(['/components/hebergement']);
    });

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

  saveResidence() {
    this.residenceService.createResidenceHoteliere(this.residence).subscribe(data => {
      this.router.navigate(['/components/hebergement']);
    });

  }

  getResidenceHotelieres() {
    this.residenceService.getResidenceHotelieres().then(residences => this.residences = residences);
  }

  // Fin traitement Residence
}



