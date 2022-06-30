
class Sorter {

    constructor(public collection: number[] | string) { }

    //Bubble Sort
    sort(): void {
        let { length } = this.collection;

        let i = 0;

        while (i < length - 1) {

            let j = length
            let start = 0

            while (start < j) {

                if (this.collection instanceof Array) {

                    if (this.collection[start] > this.collection[start + 1]) {
                        let temp = this.collection[start];
                        this.collection[start] = this.collection[start + 1];
                        this.collection[start + 1] = temp;
                    }
                    start++;
                }

                if(typeof this.collection === 'string'){

                }

            }
            length = length - 1;
        }

    }
}

const sorter = new Sorter([5, 1, 2, 90, 45, -7]);

sorter.sort()

console.log(sorter.collection)