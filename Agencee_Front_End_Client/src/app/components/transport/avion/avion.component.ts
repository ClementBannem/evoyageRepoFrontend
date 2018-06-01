import { Avion } from "../../../model/model.avion";
import { AvionService } from "../../../services/avion.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Reservation} from "../../../model/model.reservation";
import { ReservationService } from "../../../services/reservation.service";
import { User } from "../../../model/model.user";
import {ToastyService, ToastOptions, ToastData} from "ng2-toasty";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  avions: Avion[];
  avion:Avion = new Avion();
  av: Avion[];

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

  constructor(public avionService: AvionService, public router: Router, private toastyService: ToastyService
    ,private reservationService: ReservationService, private modalService: NgbModal) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  ngOnInit(): void {
    this.getAvions();
    this.getValue(this.reservation);
  }

  // traitement avion
  modalAVdetails(avion: Avion, modal) {
    av => this.av = av;
    this.modalService.open(modal, {size: 'lg'});
  }

  getAvions() {
    this.avionService.getAvions().then(avions => this.avions = avions);
  }
  
  // save(options){
  //   this.reservationService.createReservation(this.reservation).subscribe(data => {
  //     this.toastyService.success(toastOptions);
  //   });
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
