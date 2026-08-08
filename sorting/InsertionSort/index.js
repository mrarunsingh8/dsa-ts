"use strict";
class InsertionSort {
    arr = [61, 32, 63, 4, 5, 76, 84, 27, 90, 87, 46];
    sort() {
        for (let i = 1; i < this.arr.length; i++) {
            let key = this.arr[i];
            let j = i - 1;
            while (j >= 0 && this.arr[j] > key) {
                this.arr[j + 1] = this.arr[j];
                j = j - 1;
            }
            this.arr[j + 1] = key;
        }
    }
    main() {
        this.sort();
        console.table(this.arr);
    }
}
const insertionSort = new InsertionSort();
insertionSort.main();
