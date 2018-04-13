import { Evenement } from "../../model/model.evenement";
import { EvenementService } from "../../services/evenement.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
events:Evenement = new Evenement();
  e:Evenement[];
  evenmt:Evenement[];
  
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  
  constructor(public router: Router, private modalService: NgbModal, private evenementService: EvenementService, private toastyService: ToastyService) { }

  ngOnInit():void {
    this.getEvenements();
  }
  
  ver(events: Evenement, modal) {
    e => this.e = e;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveE(options){
    this.evenementService.createEvenement(this.events).subscribe(data =>{
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
  
  getEvenements() {
     this.evenementService.getEvenement().then(evenmt => this.evenmt = evenmt);
  }
  
  deleteEvenement(ev){
    this.evenementService.deleteEvenement(ev.idE).subscribe((data)=>{
      this.evenmt.splice(this.evenmt.indexOf(ev),1);
    },(error)=>{
      console.log(error);
    });
  }
  
  goBack(): void {
    window.location.replace('/evenement');
  }

}
