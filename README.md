# Analysis of Algorithms Homework

## About

<b>Student name</b>: Mohamed Bakour<br />
<b>Student id</b>: 220911218<br />
<b>Programming Language</b>: TypeScript<br />

I decided to go with TypeScript because I am familiar with it and with the Node.js ecosystem.

## How to run

Instruction to run each file individually are inside each folder report

-   <b>Option 1 (online):</b>
    Using TypeScript language online playground https://www.typescriptlang.org/play

-   <b>Option 2 (locally):</b>

    1. Install Node.js
       https://nodejs.org/en/download/

    2. Install TypeScript
       `npm install -g typescript`

    3. Run TypeScript compiler
       `tsc filename.ts`

    4. Run the JavaScript output file
       `node filename.js`

You could compile the all files at once in watch mode using the following command on the root directory of the homework

`tsc --watch`

and then run each JavaScript output file from the dist folder individually

`node ./dist/filename.js`

## Content

##### Search Algorithms

-   [Binary Search](./src/binary-search/binarySearch.ts)
-   [Interpolation Search](./src/interpolation-search/interpolationSearch.ts)

##### Graph Traversal Algorithms

-   [Breadth First Search](./src/breadthfirst-search/breadthFirstSearch.ts)
-   [Depth First Search](./src/depthfirst-search/depthFirstSearch.ts)

##### Sort Algorithms

-   [Heap Sort](./src/heap-sort/heapSort.ts)
-   [Insertion Sort](./src/insertion-sort/insertionSort.ts)
-   [Merge Sort](./src/merge-sort/mergeSort.ts)

##### Other Algorithms

-   [Gaussian Elimination](./src/gaussian-elimination/gaussianElimination.ts)
-   [Stable Marriage](./src/stable-marriage/stableMarriage.ts)
