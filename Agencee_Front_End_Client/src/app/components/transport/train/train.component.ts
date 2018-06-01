import { Train } from "../../../model/model.train";
import { TrainService } from "../../../services/train.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {Reservation} from "../../../model/model.reservation";
import { ReservationService } from "../../../services/reservation.service";
import { User } from "../../../model/model.user";
import {ToastyService, ToastOptions, ToastData} from "ng2-toasty";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trains: Train[];
  train: Train = new Train();
  tr: Train[];

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

  constructor(private trainService: TrainService, public router: Router, private toastyService: ToastyService
  ,private reservationService: ReservationService, private modalService: NgbModal) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.getTrains();
    this.getValue(this.reservation);
  }
  
  // traitement train
  modalTRdetails(train: Train, modal) {
    tr => this.tr = tr;
    this.modalService.open(modal, {size: 'lg'});
  }
  
  getTrains() {
    this.trainService.getTrains().then(trains => this.trains = trains);
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
