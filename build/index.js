"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const Sorter_1 = require("./Sorter");
// const numbersCollection = new NumbersCollection([5, 1, 2, 90, 45, -7, 90000, -4545454]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(numbersCollection.data)
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
