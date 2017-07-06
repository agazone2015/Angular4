import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service'
import { FormGroup, FormControl, FormArray, Validators, Validator, ValidatorFn, ValidationErrors, AbstractControl, AsyncValidatorFn } from '@angular/forms'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

import { Observable } from 'rxjs'

@Component({
  selector: 'sg-search-form',
  template: `
    <form [formGroup]="queryForm">
      <input formControlName="query">
      <div *ngIf="queryForm.dirty || queryForm.touched">
        <p *ngIf="query.errors?.required"> Field is required </p>
        <p *ngIf="query.errors?.minlength"> Text it too short </p>
        <p *ngIf="query.errors?.censor"> Text is not allowed </p>
        {{query.errors | json}}
         <p *ngIf="queryForm.pending"> Please wait checking... </p>
         <button [disabled]="queryForm.invalid">Search</button>

        <!--<form-errors[field]="query"></form-errors> ZADANKO!!!!!!!!!!! -->
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

    const censor = (text):ValidatorFn => (control:AbstractControl):ValidationErrors => {

      return (control.value.search(text) > -1)? {
        'censor': true
      } : null
    }

    const asyncCensor = (text):AsyncValidatorFn => ( control: AbstractControl) => {
      
      // return http.get('...').map(response => response.ok? null : {'censor':true})
      return Observable.create( observer => {
      setTimeout(() => {
        observer.next(
          (control.value.search(text) > -1) ? {
            'censor': true
          } : null)
          observer.complete()
      }, 2000)
    })
  }

    this.query = new FormControl('',[
      Validators.required, 
      Validators.minLength(3)
      ], 
      [
        asyncCensor('batman')
      ]);

    this.queryForm = new FormGroup({
      'query': this.query
    })


// http://reactivex.io
// http://reactivex.io/manual/tutorial.html
    this.queryForm.get('query')
    .valueChanges
    .filter( query => query.length >= 3)
    .distinctUntilChanged()
    .debounceTime(400)
    .subscribe( query => this.search (query) )

    //console.log(this.queryForm)

  }

  search(query){
      this.service.search(query)
  }

  ngOnInit() {
  }

}
