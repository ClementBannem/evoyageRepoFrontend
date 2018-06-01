import { AutoCar } from "../../../model/model.autocar";
import { AutocarService } from "../../../services/autocar.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {Reservation} from "../../../model/model.reservation";
import { ReservationService } from "../../../services/reservation.service";
import { User } from "../../../model/model.user";
import {ToastyService, ToastOptions, ToastData} from "ng2-toasty";

@Component({
  selector: 'app-autocar',
  templateUrl: './autocar.component.html',
  styleUrls: ['./autocar.component.css']
})
export class AutocarComponent implements OnInit {
  autocars: AutoCar[];
  autocar: AutoCar = new AutoCar();
  ac: AutoCar[];
  reserv: Reservation;

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

  constructor(private autocarService: AutocarService, public router: Router, private toastyService: ToastyService
  ,private reservationService: ReservationService, private modalService: NgbModal) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.getAutocars();
    this.getValue(this.reservation);
  }
  
  // traitement autocar
  modalACdetails(autocar: AutoCar, modal) {
    ac => this.ac = ac;
    this.modalService.open(modal, {size: 'lg'});
  }
  
  getAutocars() {
    this.autocarService.getAutocars().then(autocars => this.autocars = autocars);
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

  save(reserv){
    this.reservationService.createReservation(reserv.id,
    {
      voyage: reserv.voyage
    }).subscribe(data => {
      console.log(data);
      reserv = data as Reservation;
    }, (error) => {
      console.log(error);
    });
  }

  getValue(reservation: Reservation) {
    reservation.client_id = this.currentUser.id;
  }
  
}
