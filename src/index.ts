import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter'


// const numbersCollection = new NumbersCollection([5, 1, 2, 90, 45, -7, 90000, -4545454]);
// const sorter = new Sorter(numbersCollection);

// sorter.sort()

// console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);

sorter.sort();

console.log(charactersCollection.data)