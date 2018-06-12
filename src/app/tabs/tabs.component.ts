import { Component, OnInit } from '@angular/core';

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

  getCharacters() {}

  onSideChoosen(charInfo) {
    const pos = this.allCharacter.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.allCharacter[pos].side = charInfo.side;
  }
}
