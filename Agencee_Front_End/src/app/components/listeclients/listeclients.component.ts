import { Client } from "../../model/model.client";
import { ClientService } from "../../services/client.service";
import { Input } from "@angular/core";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";



@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: ['./listeclients.component.css']
})
export class ListeclientsComponent implements OnInit {
  clients: Client[]; //liste des clients
  client:Client = new Client(); //nouveau client
  c: Client[]; //modal liste client
  nc: Client[]; //modal ajout client
  uc: Client[]; //modal update client
  
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  
  errorMessage: string;

  constructor(private clientService: ClientService, public router: Router, private modalService: NgbModal
    ,private toastyService: ToastyService) { }
  
  ver(client: Client, modal){
    c => this.c = c;
    this.modalService.open(modal);
  }
  
  ver_NC(client: Client, modal){
    nc => this.nc = nc;
    this.modalService.open(modal, {size: 'lg'});
  }
  
  ver_UC(client: Client, modal){
    uc => this.uc = uc;
    this.modalService.open(modal, {size: 'lg'});
  }
  
  save(options){
    
    // ajout client //
    
    this.clientService.createClient(this.client).subscribe(data =>{
        this.toastyService.success(toastOptions);      
      }
    );
    
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
  
  getClients() {
     this.clientService.getClients().then(clients => this.clients = clients);
  }
  

  ngOnInit():void {
    this.getClients();
  }
  
  deleteClient(user){
    this.clientService.deleteClient(user.id).subscribe((data)=>{
      this.clients.splice(this.clients.indexOf(user),1);
    },(error)=>{
      console.log(error);
    });
  }
  
  updateClient(cust){
    this.clientService.setter(cust);
    this.router.navigate(['/listeclients']);
  }

}
