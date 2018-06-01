import {Client} from "../../model/model.client";
import {ClientService} from "../../services/client.service";
import {OnInit} from "@angular/core";
import {Component} from "@angular/core";
import {Router,ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastyService, ToastOptions, ToastData} from "ng2-toasty";
import { User } from "../../model/model.user";



@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: ['./listeclients.component.css']
})
export class ListeclientsComponent implements OnInit {
  clients: Client[]; //liste des clients
  client: Client = new Client(); //nouveau client
  c: Client[]; //modal liste client
  nc: Client[]; //modal ajout client
  uc: Client[]; //modal update client
  public currentUser: User;
  filteredClients: any[];
  cust: Client;

  private sub: any;
  id: number;

  private customer: Client;

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
    , private toastyService: ToastyService,private route: ActivatedRoute,) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  ver(client: Client, modal) {
    c => this.c = c;
    this.modalService.open(modal);
  }

  ver_NC(client: Client, modal) {
    nc => this.nc = nc;
    this.modalService.open(modal, {size: 'lg'});
  }

  ver_UC(client: Client, modal) {
    uc => this.uc = uc;
    this.modalService.open(modal, {size: 'lg'});
  }

  save(options) {

    // ajout client //

    this.clientService.createClient(this.client).subscribe(data => {
      this.toastyService.success(toastOptions);
      this.goBack();
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
    //this.clientService.getClients().then(clients => this.clients = clients);
    this.clientService.getClients().subscribe(res => {
      this.clients = res;
      this.filteredClients = this.clients.filter(cust => cust.ajoutePar == this.currentUser.id);
    })
  }


  ngOnInit(): void {
    this.getClients();
    this.getValue(this.client);
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  deleteClient(user) {
    this.clientService.deleteClient(user.id).subscribe((data) => {
      this.clients.splice(this.clients.indexOf(user), 1);
    }, (error) => {
      console.log(error);
    });
  }

  goBack(): void {
    window.location.replace('/listeclients');
  }

  myFunction(event: any) {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("customers");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  saveUpdate() {
    this.clientService.updateClient(this.customer).subscribe((customer) => {
      console.log(customer);
    }, (error) => {
      console.log(error);
    });
  }
  getValue(client: Client) {
    client.ajoutePar = this.currentUser.id;
  }

}
