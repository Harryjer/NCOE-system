import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';


@Component({
  selector: 'app-sport-details-form',
  templateUrl: './sport-details-form.component.html',
  styleUrls: ['./sport-details-form.component.css']
})



export class SportDetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

