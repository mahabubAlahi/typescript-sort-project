
interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {

    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;


    //Bubble Sort
    sort(): void {
        let { length } = this;

        let i = 0;

        while (i < length) {

            let j = length - 1;
            let start = 0;

            while (start < j) {

                if (this.compare(start, start+1)) {
                    this.swap(start, start+1);
                }
                start++;

            }
            length = length - 1;
        }

    }
}