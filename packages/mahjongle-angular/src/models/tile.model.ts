export class Tile {

  readonly key: string;
  readonly name: string;
  // value: string;
  // suit: string;

  constructor(key: string) {
    this.key = this.isTileKeyValid(key) ? key : 'Invalid';
    this.name = this.getTileNameFromKey(this.key);
  }

  // TODO: Need to validate flowers
  private isTileKeyValid(key: string): boolean {
    const suitChar = key[0];
    const valueChar = key[1];

    let valueSet: Set<string> = new Set();

    switch(suitChar.toUpperCase()) {
      case 'W':
        valueSet = new Set(['N', 'E', 'S', 'W']);
        break;
      case 'R':
        valueSet = new Set(['R', 'G', 'W']);
        break;
      case 'D':
      case 'B':
      case 'C':
        valueSet = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        break;
      default:
        return false;
    }

    return valueSet.has(valueChar);
  }

  // TODO: Need to do flowers
  getTileNameFromKey(key: string): string {
    if (key?.length < 2)
      return 'Invalid Tile';

    const suitChar = key[0].toUpperCase();
    const valueChar = key[1].toUpperCase();
    let name = '';

    switch (valueChar) {
      case 'N':
        name += 'North';
        break;
      case 'E':
        name += 'East';
        break;
      case 'S':
        name += 'South';
        break;
      case 'W':
        name += 'West';
        break;
      case 'R':
        name += 'Red';
        break;
      case 'G':
        name += 'Green';
        break;
      case 'W':
        name += 'White';
        break;
      case '1':
        name += 'One';
        break;
      case '2':
        name += 'Two';
        break;
      case '3':
        name += 'Three';
        break;
      case '4':
        name += 'Four';
        break;
      case '5':
        name += 'Five';
        break;
      case '6':
        name += 'Six';
        break;
      case '7':
        name += 'Seven';
        break;
      case '8':
        name += 'Eight';
        break;
      case '9':
        name += 'Nine';
        break;
      default:
        return 'Invalid Tile';
    }

    switch(suitChar) {
      case 'W':
        name += ' Wind'
        break;
      case 'R':
        name += ' Dragon'
        break;
      case 'D':
        name += ' of Dots';
        break;
      case 'B':
        name += ' of Bamboo'
        break;
      case 'N':
        name += ' of Numbers'
        break;
      default:
        return 'Invalid Tile';
    }

    return name;
  }

}