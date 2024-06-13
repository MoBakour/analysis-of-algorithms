// binary search implementation
function binarySearch(array: number[], target: number): number | null {
    // declare left and right pointers
    let left: number = 0;
    let right: number = array.length - 1;

    // as long as left is less than right
    while (left <= right) {
        // find mid index (round down if necessary)
        let mid = Math.floor((left + right) / 2);

        // if found target
        if (target === array[mid]) {
            return mid;
        }
        // if target is in left side of mid
        // narrow down by ignoring right side completely
        else if (target < array[mid]) {
            right = mid - 1;
        }
        // if target is in right side of mid
        // narrow down by ignoring left side completely
        else {
            left = mid + 1;
        }
    }

    // if no value was found and returned
    // means no matches, return null
    return null;
}

// test case
const data = [1, 3, 7, 19, 22, 31, 46, 99, 101];
console.log(binarySearch(data, 7)); // expected output: 2

// clear exports
export {};
