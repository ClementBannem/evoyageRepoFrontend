import { Bateau } from "../../../model/model.bateau";
import { BateauService } from "../../../services/bateau.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.css']
})
export class BateauComponent implements OnInit {

  bateau:Bateau = new Bateau();
  constructor(public bateauService: BateauService, public router: Router) { }

  ngOnInit() {
  }
  
  save(){
    this.bateauService.createBateau(this.bateau).subscribe(data =>{
      this.router.navigate(['/dashboard']);
    });
  }

}
