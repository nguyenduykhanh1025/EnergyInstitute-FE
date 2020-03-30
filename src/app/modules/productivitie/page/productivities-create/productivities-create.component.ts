import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-productivities-create',
  templateUrl: './productivities-create.component.html',
  styleUrls: ['./productivities-create.component.css']
})
export class ProductivitiesCreateComponent implements OnInit {

  createForm = new FormGroup({
    amount: new FormControl("", [Validators.required])
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
