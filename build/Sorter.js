"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    //Bubble Sort
    sort() {
        let { length } = this.collection;
        let i = 0;
        while (i < length - 1) {
            let j = length;
            let start = 0;
            while (start < j) {
                if (this.collection.compare(start, start + 1)) {
                    this.collection.swap(start, start + 1);
                }
                start++;
            }
            length = length - 1;
        }
    }
}
exports.Sorter = Sorter;
