import { Component, OnInit, Input } from '@angular/core';
import { MovieCharacterService } from '../movie-character.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemCharacter;
  // @Output() sideAssign = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssign(side) {
    // this.itemCharacter.side = side;
    // this.sideAssign.emit({name: this.itemCharacter.name, side: side});
    const movieChar = new MovieCharacterService();
    movieChar.onSideChoosen({name: this.itemCharacter.name, side: this.itemCharacter.side});
  }
}
