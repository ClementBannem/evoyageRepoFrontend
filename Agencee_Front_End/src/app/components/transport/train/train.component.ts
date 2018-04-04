import { Train } from "../../../model/model.train";
import { TrainService } from "../../../services/train.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

   train:Train = new Train();
  constructor(public trainService: TrainService, public router: Router) { }

  ngOnInit() {
  }
  
  save(){
    this.trainService.createTrain(this.train).subscribe(data =>{
      this.router.navigate(['/dashboard']);
    });
  }
}
