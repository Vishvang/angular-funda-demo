import { Component, OnInit } from '@angular/core';
import { MovieCharacterService } from '../movie-character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  movieCharacterSer: MovieCharacterService;

  constructor(movieChar: MovieCharacterService) {
    this.movieCharacterSer = movieChar;
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.invalid);
    if (form.invalid) { return; }

    console.log(form);     // Will print form object return by angular
    console.log(form.value);  // Will show all forms value.
    this.movieCharacterSer.addNewCharacter(form.value.name, form.value.side);
  }
}
