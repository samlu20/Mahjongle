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
    const valueChar = key[0];
    const suitChar = key[1];
    let isHonor: boolean = isNaN(Number(valueChar));

    let valueSet: Set<string> = new Set();

    switch(suitChar.toUpperCase()) {
      case 'W':
        valueSet = new Set(['N', 'E', 'S', 'W']);
        break;
      case 'D':
        if (isHonor)
          valueSet = new Set(['R', 'G', 'W']);
        else 
          valueSet = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        break;
      case 'B':
      case 'C':
        valueSet = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        break;
      default:
        return false;
    }

    return valueSet.has(valueChar);
  }

  // private getTileKey(suit: string, value: string): string {
  //   let key = '';
  //   value = value.toLowerCase();

  //   switch(suit.toLowerCase()) {
  //     case 'wind':
  //       key += 'W';
  //       switch (value) {
  //         case 'north':
  //           key += 'N';
  //           break;
  //         case 'east':
  //           key += 'E';
  //           break;
  //         case 'south':
  //           key += 'S';
  //           break;
  //         case 'west':
  //           key += 'W';
  //           break;
  //         default:
  //           return '';
  //       }
  //       break;
  //     case 'dragon':
  //       key += 'D';
  //       switch(value) {
  //         case 'red':
  //           key += 'R';
  //           break;
  //         case 'white':
  //           key += 'W';
  //           break;
  //         case 'green':
  //           key += 'G';
  //           break;
  //         default:
  //           return '';
  //       }
  //       break;
  //     case 'bamboo': {
  //       key += 'B';
  //       const numberValue = Number(value);
  //       if (isNaN(numberValue) || numberValue < 1 || numberValue > 9)
  //         return '';
  //       else
  //         key += Number(value);
  //       break;
  //     }
  //     case 'dot': {
  //       key += 'D';
  //       const numberValue = Number(value);
  //       if (isNaN(numberValue) || numberValue < 1 || numberValue > 9)
  //         return '';
  //       else
  //         key += Number(value);
  //       break;
  //     }
  //     case 'number': {
  //       key += 'N';
  //       const numberValue = Number(value);
  //       if (isNaN(numberValue) || numberValue < 1 || numberValue > 9)
  //         return '';
  //       else
  //         key += Number(value);
  //       break;
  //     }
  //     default:
  //       return '';
  //   }
    
  //   return key;
  // }

  // TODO: Need to do flowers
  getTileNameFromKey(key: string): string {
    if (key?.length < 2)
      return 'Invalid Tile';

    const valueChar = key[0].toUpperCase();
    const suitChar = key[1].toUpperCase();
    let isHonor: boolean = isNaN(Number(valueChar));
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
      case 'D':
        name += isHonor ? ' Dragon' : ' of Dots';
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