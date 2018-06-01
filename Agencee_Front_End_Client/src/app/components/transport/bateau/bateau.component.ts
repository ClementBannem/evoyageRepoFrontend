import { Bateau } from "../../../model/model.bateau";
import { BateauService } from "../../../services/bateau.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {Reservation} from "../../../model/model.reservation";
import { ReservationService } from "../../../services/reservation.service";
import { User } from "../../../model/model.user";
import {ToastyService, ToastOptions, ToastData} from "ng2-toasty";

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.css']
})
export class BateauComponent implements OnInit {

  bateaux: Bateau[];
  bateau: Bateau = new Bateau();
  ba: Bateau[];

  reservation: Reservation = new Reservation(); //nouvelle reservation
  
  public currentUser: User;

  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  errorMessage: string;

  constructor(private bateauService: BateauService, public router: Router, private toastyService: ToastyService
  ,private reservationService: ReservationService, private modalService: NgbModal) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.getBateaux();
    this.getValue(this.reservation);
  }
  
  // traitement bateau
  modalBAdetails(bateau: Bateau, modal) {
    ba => this.ba = ba;
    this.modalService.open(modal, {size: 'lg'});
  }
  
  getBateaux() {
    this.bateauService.getBateau().then(bateaux => this.bateaux = bateaux);
  }

  // save(options) {

  //   // ajout client //

  //   this.reservationService.createReservation(this.reservation).subscribe(data => {
  //     this.toastyService.success(toastOptions);
  //     //this.goBack();
  //   }
  //   );

  //   // Notification //

  //   if (options.closeOther) {
  //     this.toastyService.clearAll();
  //   }
  //   this.position = options.position ? options.position : this.position;
  //   const toastOptions: ToastOptions = {
  //     title: options.title,
  //     msg: options.msg,
  //     showClose: options.showClose,
  //     timeout: options.timeout,
  //     theme: options.theme,
  //     onAdd: (toast: ToastData) => {
  //       console.log('Toast ' + toast.id + ' has been added!');
  //     },
  //     onRemove: (toast: ToastData) => {
  //       console.log('Toast ' + toast.id + ' has been added removed!');
  //     }
  //   };
  // }

  getValue(reservation: Reservation) {
    reservation.client_id = this.currentUser.id;
  }
  
}
