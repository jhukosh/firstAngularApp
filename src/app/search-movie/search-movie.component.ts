import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { isRequiredValidator} from '../shared/movie.validator';
import { rangeDateValidator } from '../shared/date.validator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  movieForm : FormGroup;
  types = [];
  fiches = [];
  defaultValue;
  submitted = false;
  min = 1900;
  max = 2019;


  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.initMovieForm();
    this.types = this.getTypes();
    this.fiches = this.getFiches();
    this.movieForm.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  initMovieForm(){
    this.movieForm = this.fb.group({
      movie : this.fb.group({
        identifiant : new FormControl('', [Validators.required]),
        titre : new FormControl('', [Validators.required]),
      },
      { 
        validator : isRequiredValidator('identifiant', 'titre') 
      }),
      titre : new FormControl('', [Validators.required]),
      types : new FormControl(['']),
      sortie : new FormControl('', [Validators.required, rangeDateValidator(this.min, this.max)]),
      fiche : new FormControl([''], [Validators.required]),
    });
  }

  getTypes(){
    this.types = [
      { id:'1', type: 'film' },
      { id:'2', type: 'séries' },
      { id:'3', type: 'épisode' },
    ];
    this.movieForm.patchValue({
      types: this.types[1]
   });
    return this.types;
  }

  getFiches(){
    this.fiches = ['complète', 'courte'];
    this.movieForm.patchValue({
      fiche : this.fiches[0]
    })
    return this.fiches;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.movieForm.invalid) {
        return;
    }

    console.log(JSON.stringify(this.movieForm.value));
}

}
