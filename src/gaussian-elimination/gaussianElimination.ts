function gaussianElimination(matrix: number[][]): number[] {
    const numRows = matrix.length;
    const numCols = matrix[0].length - 1;

    // forward elimination
    for (let pivot = 0; pivot < numRows; pivot++) {
        // make the diagonal element 1
        const pivotValue = matrix[pivot][pivot];
        for (let j = pivot; j < numCols + 1; j++) {
            matrix[pivot][j] /= pivotValue;
        }

        // make other elements in the column zero
        for (let i = 0; i < numRows; i++) {
            if (i !== pivot) {
                const factor = matrix[i][pivot];
                for (let j = pivot; j < numCols + 1; j++) {
                    matrix[i][j] -= factor * matrix[pivot][j];
                }
            }
        }
    }

    // back substitution
    const solution: number[] = [];
    for (let i = 0; i < numRows; i++) {
        solution.push(matrix[i][numCols]);
    }

    return solution;
}

// test case:
const matrix: number[][] = [
    [2, 1, -1, 8],
    [-3, -1, 2, -11],
    [-2, 1, 2, -3],
];

const solution = gaussianElimination(matrix);
console.log("Solution:", solution);

// clear exports
export {};
