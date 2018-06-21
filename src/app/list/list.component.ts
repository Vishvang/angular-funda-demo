import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieCharacterService } from '../movie-character.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // @Input() listCharacters;
  // @Output() sideAssignInList = new EventEmitter<{name: string, side: string}>();

  listCharacters = [];
  activatedRoutes: ActivatedRoute;
  movieCharacterService: MovieCharacterService;

  constructor(activatedRoutes: ActivatedRoute, movieCharService: MovieCharacterService) {
    this.activatedRoutes = activatedRoutes;
    this.movieCharacterService = movieCharService;
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(
      (params) => {
        this.listCharacters = this.movieCharacterService.getCharacters(params.side);
      }
    );
  }

  // onAssignSide(passCharFromItem) {
  //   this.sideAssignInList.emit(passCharFromItem);
  // }
}
