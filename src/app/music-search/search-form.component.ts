import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'sg-search-form',
  template: `
    <form [formGroup]="queryForm">
      <input formControlName="query">
      <div *ngIf="queryForm.dirty || queryForm.touched">
        <p *ngIf="query.errors?.required"> Field is required </p>
        <p *ngIf="query.errors?.minlength"> Text it too shory </p>
      </div>
    </form>
  `,
  styles: [`
    input.ng-touched.ng-invalid,
    input.ng-dirty.ng-invalid {
        border: 2px solid red;
    }
  `]
})
export class SearchFormComponent implements OnInit {

  queryForm:FormGroup;
  query;

  constructor(private service: MusicService) {

    this.query = new FormControl('',[Validators.required, Validators.minLength(3)]);

    this.queryForm = new FormGroup({
      'query': this.query
    })

    this.queryForm.get('query')
    .valueChanges
    .subscribe( query => this.search (query) )

    //console.log(this.queryForm)

  }

  search(query){
      this.service.search(query)
  }

  ngOnInit() {
  }

}
