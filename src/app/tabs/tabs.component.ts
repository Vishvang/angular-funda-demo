import { Component, OnInit } from '@angular/core';
import { MovieCharacterService } from '../movie-character.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  allCharacter = [];
  choosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(selectSide) {
    this.choosenList = selectSide;
  }

  getCharacters() {
    const movieChar = new MovieCharacterService();
    this.allCharacter = movieChar.getCharacters(this.choosenList);
    return this.allCharacter;
  }
}
