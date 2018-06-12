export class MovieCharacterService {
  private allCharacter = [
    { name: 'David', side: ''},
    { name: 'Mac', side: ''}
  ];

  getCharacters(choosenList) {
    if (choosenList === 'all') {
      return this.allCharacter;
    }
    return this.allCharacter.filter((char) => {
      return char.side === choosenList;
    });
  }
}
