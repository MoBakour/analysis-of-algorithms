// insertion sort implementation
function insertionSort(arr: number[]): number[] {
    // we go from element at index 1 to the end
    for (let i = 1; i < arr.length; i++) {
        // on each i loop, define current at i'th index
        // we also define j, which is the previous index
        let current = arr[i];
        let j = i - 1;

        // while the previous is a valid index
        // and j'th item is greater than current item
        // we move j'th item up in the list until the condition is false
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
    return arr;
}

// test case
const data = [19, 1, 3, 14, 11, 45, 31, 22, 20];
console.log(insertionSort(data)); // expected output: [1, 3, 11, 14, 19, 20, 22, 31, 45]

// clear exports
export {};
