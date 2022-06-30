import { NumbersCollection } from './NumbersCollection'

export class Sorter {

    constructor(public collection: NumbersCollection) { }

    //Bubble Sort
    sort(): void {
        let { length } = this.collection;

        let i = 0;

        while (i < length - 1) {

            let j = length
            let start = 0

            while (start < j) {

                if (this.collection.compare(start, start+1)) {
                    this.collection.swap(start, start+1);
                }
                start++;

            }
            length = length - 1;
        }

    }
}