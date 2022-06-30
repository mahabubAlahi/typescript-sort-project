
interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {

    constructor(public collection: Sortable) { }

    //Bubble Sort
    sort(): void {
        let { length } = this.collection;

        let i = 0;

        while (i < length) {

            let j = length - 1;
            let start = 0;

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