import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter'


const numbersCollection = new NumbersCollection([5, 1, 2, 90, 45, -7]);
const sorter = new Sorter(numbersCollection);

sorter.sort()

console.log(numbersCollection.data)