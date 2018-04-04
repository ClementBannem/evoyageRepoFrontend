import { AutoCar } from "../../../model/model.autocar";
import { AutocarService } from "../../../services/autocar.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-autocar',
  templateUrl: './autocar.component.html',
  styleUrls: ['./autocar.component.css']
})
export class AutocarComponent implements OnInit {

   autocar:AutoCar = new AutoCar();
  constructor(public autocarService: AutocarService, public router: Router) { }

  ngOnInit() {
  }
  
  save(){
    this.autocarService.createAutocar(this.autocar).subscribe(data =>{
      this.router.navigate(['/dashboard'])
    });
  }
}
