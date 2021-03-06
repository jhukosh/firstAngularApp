import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { isRequiredValidator} from '../shared/movie.validator';
import { rangeDateValidator } from '../shared/date.validator';
import { movieForm } from '../common/class/form.model';
import { Observable } from 'rxjs';

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
  idValue: Observable<any>;
  id: boolean;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.id = true;
    this.initMovieForm();
    this.types = this.getTypes();
    this.fiches = this.getFiches();
    this.movieForm.valueChanges
    .subscribe(value => {
      this.idValue = this.movieForm.get('movie.identifiant').value;
    });
  }

  initMovieForm(){
    this.movieForm = this.fb.group({
      movie : this.fb.group({
        identifiant : ['', Validators.required],
        titre : ['', Validators.required],
      },
      { 
        validator : isRequiredValidator('identifiant', 'titre') 
      }),
      types : [''],
      sortie : ['', [Validators.required, rangeDateValidator(this.min, this.max)]],
      fiche : [{value:'', disabled:true}, Validators.required],
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
    this.fiches = [
      'complète',
      'courte'
    ];
    this.movieForm.patchValue({
      fiche : this.fiches[0]
    })
    return this.fiches;
  }

  enableFiches(){
    return this.movieForm.get('movie.identifiant').value === '' ? this.movieForm.get('fiche').disable() : this.movieForm.get('fiche').enable();
  }

  onSubmit() {
    this.submitted = true;
    let movieFormFilled : movieForm;

    if (this.movieForm.invalid) {
        return;
    } else {
      movieFormFilled = this.movieForm.value;
    }

    console.log(JSON.stringify(movieFormFilled));
}

}
