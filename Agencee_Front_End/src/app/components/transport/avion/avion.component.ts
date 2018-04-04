import { Avion } from "../../../model/model.avion";
import { AvionService } from "../../../services/avion.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  avion:Avion = new Avion();
  constructor(public avionService: AvionService, public router: Router) { }

  ngOnInit() {
  }
  
  save(){
    this.avionService.createAvion(this.avion).subscribe(data =>{
      this.router.navigate(['/dashboard']);
    });
  }
}
