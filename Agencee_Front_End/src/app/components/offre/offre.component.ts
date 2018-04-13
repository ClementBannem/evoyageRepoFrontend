import { Offre } from "../../model/model.offre";
import { OffreService } from "../../services/offre.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  offre:Offre = new Offre();
  o:Offre[];
  offres: Offre[]; //liste des offres
  
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  constructor(public router: Router, private modalService: NgbModal, private offreService: OffreService
  , private toastyService: ToastyService) { }

  ngOnInit():void {
    this.getOffre();
  }
  
  ver(offre: Offre, modal) {
    o => this.o = o;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveO(options){
    this.offreService.createOffre(this.offre).subscribe(data =>{
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
  
  getOffre() {
     this.offreService.getOffre().then(offres => this.offres = offres);
  }
  
  deleteOffres(ofre){
    this.offreService.deleteOffre(ofre.idO).subscribe((data)=>{
      this.offres.splice(this.offres.indexOf(ofre),1);
    },(error)=>{
      console.log(error);
    });
  }

}
