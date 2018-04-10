import { Evenement } from "../../model/model.evenement";
import { EvenementService } from "../../services/evenement.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
events:Evenement = new Evenement();
  e:Evenement[];
  evenmt:Evenement[];
  
  constructor(public router: Router, private modalService: NgbModal, private evenementService: EvenementService) { }

  ngOnInit():void {
    this.getEvenements();
  }
  
  ver(events: Evenement, modal) {
    e => this.e = e;
    this.modalService.open(modal, {size: 'lg'});
  }
  saveE(){
    this.evenementService.createEvenement(this.events).subscribe(data =>{
      this.router.navigate(['/components/evenement']);
    });
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
