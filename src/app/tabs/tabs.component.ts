import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  allCharacter = [
    { name: 'David', side: ''},
    { name: 'Mac', side: ''}
  ];

  choosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(selectSide) {
    this.choosenList = selectSide;
  }

  getCharacters() {
    if (this.choosenList === 'all') {
      return this.allCharacter;
    }
    return this.allCharacter.filter((char) => {
      return char.side === this.choosenList;
    });
  }

  onSideChoosen(charInfo) {
    const pos = this.allCharacter.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.allCharacter[pos].side = charInfo.side;
  }
}
