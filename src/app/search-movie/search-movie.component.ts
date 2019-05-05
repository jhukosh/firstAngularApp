import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  movieForm : FormGroup;
  types = [];
  fiche = [];


  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.initMovieForm();
    this.types = this.getTypes();
    this.fiche = this.getFiches();
    this.movieForm.controls.types.setValue(this.types[2].id);
  }

  initMovieForm(){
    this.movieForm = this.fb.group({
      identifiant : new FormControl('', [Validators.required]),
      titre : new FormControl('', [Validators.required]),
      types : new FormControl(['']),
      sortie : new FormControl('', [Validators.required]),
      fiche : new FormControl([''], [Validators.required]),
    })
  }

  getTypes(){
    return [
      { id:'1', type: 'film' },
      { id:'2', type: 'série' },
      { id:'3', type: 'épisode' },
      { id:'4', type: 'Select a type' },
    ];
  }

  getFiches(){
    return ['complète', 'courte'];
  }

}
