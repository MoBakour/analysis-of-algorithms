// stack class
class Stack<T> {
	// items array
	private items: T[] = [];

	// add items to stack
	push(item: T): void {
		this.items.push(item);
	}

	// remove items from stack
	pop(): T | undefined {
		return this.items.pop();
	}

	// check if stack is empty
	isEmpty(): boolean {
		return this.items.length === 0;
	}

	// get number of items in stack
	size(): number {
		return this.items.length;
	}
}

// node class
class Node<T> {
	data: T;

	constructor(data: T) {
		this.data = data;
	}
}

// graph class
class Graph {
	// graph nodes
	nodes: Node<string>[] = [];

	// adjacency matrix
	// used to define the graph
	matrix: number[][] = [];

	// function to add new vertex (node)
	addVertex(node: Node<string>): void {
		this.nodes.push(node);

		// fill zeros in matrix when adding a new vertex
		this.matrix.forEach((row) => row.push(0));
		this.matrix.push(new Array(this.nodes.length).fill(0));
	}

	// function to add new edge between two nodes
	// (undirected)
	addEdge(src: number, dst: number): void {
		this.matrix[src][dst] = 1;
		this.matrix[dst][src] = 1;
	}

	// function to print graph matrix representation
	print(): void {
		let nodeNames: string = "  ";

		for (let node of this.nodes) {
			nodeNames += node.data + " ";
		}

		console.log(nodeNames);

		for (let i = 0; i < this.matrix.length; i++) {
			let row: string = "";

			row += this.nodes[i].data + " ";

			for (let j = 0; j < this.matrix[i].length; j++) {
				row += this.matrix[i][j] + " ";
			}

			console.log(row);
		}
	}

	// function to perform depth first search algorithm on graph
	// using the stack data structure
	depthFirstSearch(src: number): void {
		// stack
		const stack = new Stack<number>();

		// visited set
		const visited: Set<number> = new Set();

		// push the source node and mark it as visited
		stack.push(src);
		visited.add(src);

		// while stack is not empty
		// push an item and assign it as source
		while (!stack.isEmpty()) {
			src = stack.pop()!;
			console.log(`Visited: ${this.nodes[src].data}`);

			for (let i = 0; i < this.matrix[src].length; i++) {
				if (this.matrix[src][i] == 1 && !visited.has(i)) {
					stack.push(i);
					visited.add(i);
				}
			}
		}
	}
}

// test case
// create graph instance
const graph = new Graph();

// add nodes to graph
graph.addVertex(new Node("A"));
graph.addVertex(new Node("B"));
graph.addVertex(new Node("C"));
graph.addVertex(new Node("D"));
graph.addVertex(new Node("E"));
graph.addVertex(new Node("F"));
graph.addVertex(new Node("G"));

// add edges between graph nodes
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(4, 0);
graph.addEdge(4, 2);
graph.addEdge(4, 5);
graph.addEdge(0, 6);

// print graph matrix representation to visualize graph structure
graph.print();

// perform depth first search on the graph
graph.depthFirstSearch(1);

// clear exports
export {};
