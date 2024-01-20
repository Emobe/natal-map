import {Zodiac, ZodiacElement} from './';

class Aries extends Zodiac {
  constructor() {
    super("Aries", ZodiacElement.Fire, {start: new Date(0, 3, 21), end: new Date(0, 4, 19)});
  }
}

export default Aries;
