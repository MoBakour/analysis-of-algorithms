// merge sort implementation
function mergeSort(array: number[]): number[] {
    // base case of recursion
    if (array.length <= 1) return array;

    // break array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    // call mergeSort recursively on each half
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // merge sorted results
    // use left and right pointers for comparison operations
    let result: number[] = [];
    let leftPtr = 0;
    let rightPtr = 0;

    while (leftPtr < leftSorted.length && rightPtr < rightSorted.length) {
        if (leftSorted[leftPtr] < rightSorted[rightPtr]) {
            result.push(leftSorted[leftPtr]);
            leftPtr++;
        } else {
            result.push(rightSorted[rightPtr]);
            rightPtr++;
        }
    }

    result = result.concat(leftSorted.slice(leftPtr));
    result = result.concat(rightSorted.slice(rightPtr));

    // return sorted result
    return result;
}

// test case
const data = [19, 1, 3, 14, 11, 45, 31, 22, 20];
console.log(mergeSort(data)); // expected output: [1, 3, 11, 14, 19, 20, 22, 31, 45]

// clear exports
export {};
