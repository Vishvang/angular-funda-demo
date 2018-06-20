import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieCharacterService {

  private allCharacter = [
    { name: 'David', side: ''},
    { name: 'Mac', side: ''}
  ];
  log: LogService;

  constructor(logService: LogService) {
    this.log = logService;
  }

  getCharacters(choosenList) {
    if (choosenList === 'all') {
      return this.allCharacter;
    }
    return this.allCharacter.filter((char) => {
      return char.side === choosenList;
    });
  }

  onSideChoosen(charInfo) {
    const pos = this.allCharacter.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.allCharacter[pos].side = charInfo.side;
    this.log.writeLog('Change side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }

  addNewCharacter(name, side) {
    const newChar = {name: name, side: side};
    this.allCharacter.push(newChar);
  }
}
