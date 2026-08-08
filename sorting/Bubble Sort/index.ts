class BubbleSort{
    arr: Array<Number> = [61,32,63,4,5,76,84,27,90,87,46];

    main() {
        for(let i=0; i<this.arr.length; i++){
            for(let j=0; j<this.arr.length-1; j++){
                if(this.arr[j] > this.arr[j+1]){
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j+1];
                    this.arr[j+1] = temp;
                }
            }
        }
        console.table(this.arr);
    }
}

const bubbleSort = new BubbleSort();
bubbleSort.main();