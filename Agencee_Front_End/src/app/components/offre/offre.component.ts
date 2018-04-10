import { Offre } from "../../model/model.offre";
import { OffreService } from "../../services/offre.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  offre:Offre = new Offre();
  o:Offre[];
  offres: Offre[]; //liste des offres
  constructor(public router: Router, private modalService: NgbModal, private offreService: OffreService) { }

  ngOnInit():void {
    this.getOffre();
  }
  
  ver(offre: Offre, modal) {
    o => this.o = o;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveO(){
    this.offreService.createOffre(this.offre).subscribe(data =>{
      this.router.navigate(['/components/evenement']);
    });
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
