import {Client} from "../../model/model.client";
import {ClientService} from "../../services/client.service";
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";

@Component({
  selector: 'app-fiche-client',
  templateUrl: './fiche-client.component.html',
  styleUrls: ['./fiche-client.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FicheClientComponent implements OnInit {
  client:Client = new Client();
  errorMessage: string;
  
  constructor(private clientService: ClientService, public router: Router, private toastyService: ToastyService) {}

  ngOnInit() {
  }

 save(){
    this.clientService.createClient(this.client).subscribe(data =>{
        this.router.navigate(['/dashboard']);      
      }
    );
  }
}
