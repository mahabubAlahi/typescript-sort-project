"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    //Bubble Sort
    sort() {
        let { length } = this;
        let i = 0;
        while (i < length) {
            let j = length - 1;
            let start = 0;
            while (start < j) {
                if (this.compare(start, start + 1)) {
                    this.swap(start, start + 1);
                }
                start++;
            }
            length = length - 1;
        }
    }
}
exports.Sorter = Sorter;
