import { Client } from "../../../../model/model.client";
import { ClientService } from "../../../../services/client.service";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  getClients() {
    //this.clientService.getClients().then(clients => this.clients = clients);
  }

  ngOnInit(): void {
    this.getClients();
  }

}
