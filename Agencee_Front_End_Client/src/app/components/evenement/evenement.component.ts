import { Evenement } from "../../model/model.evenement";
import { EvenementService } from "../../services/evenement.service";
import { Component, OnInit, NgZone, Pipe } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SearchFilterPipe } from "./filter-pipe";
import { FilterPipe } from "./filter.pipe";
import {
  Input, Output, Inject, AfterViewInit, forwardRef, EventEmitter, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';




@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css'],
  //pipes: [FilterPipe]
})
export class EvenementComponent implements OnInit {
  events: Evenement = new Evenement();
  evenmt: Evenement[];
  stateForm: FormGroup;

  showDropDown=false;
  //e: Evenement[];

  typeE: string;

  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  constructor(public router: Router, private modalService: NgbModal, private evenementService: EvenementService
    , private toastyService: ToastyService, private ref: ChangeDetectorRef, private zone: NgZone,
    private fb: FormBuilder) {
      this.initForm()
     }

     initForm(): FormGroup {
      return this.stateForm = this.fb.group({
        search: [null]
      })
    }

  ngOnInit(): void {
    //this.typeE = "";
    this.getEvenements();
  }

  selectValue(value) {
    this.stateForm.patchValue({"search": value});
    this.showDropDown = false;
  }

  ver(events: Evenement, modal) {
    evenmt => this.evenmt = evenmt;
    this.modalService.open(modal, { size: 'lg' });
  }
  saveE(options) {
    this.evenementService.createEvenement(this.events).subscribe(data => {
      this.toastyService.success(toastOptions);
      this.goBack();
    });
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

  // searchEvenement(){
  //   this.evenementService.getEvenementByType(this.typeE).subscribe((data)=> {
  //     console.log(data);
  //   });
  // }
  searchEvenement() {
    this.evenementService.getEvenementByType(this.typeE).subscribe(evenmt => {
      this.evenmt = evenmt;
      this.zone.run(() => { this.evenmt = evenmt; });
    });
  }

  
  getEvenements() {
    this.evenementService.getEvenement().then(evenmt => this.evenmt = evenmt);
  }
  
  deleteEvenement(ev) {
    this.evenementService.deleteEvenement(ev.idE).subscribe((data) => {
      this.evenmt.splice(this.evenmt.indexOf(ev), 1);
    }, (error) => {
      console.log(error);
    });
  }
  
  goBack(): void {
    window.location.replace('/evenement');
  }
  
  toggleDropDown(){
    this.showDropDown=!this.showDropDown;
  }

  openDropDown(){
    this.showDropDown=true;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }
  
}
