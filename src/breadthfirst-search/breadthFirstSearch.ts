// queue class
class Queue<T> {
	// items array
	private items: T[] = [];

	// add items to queue
	enqueue(item: T): void {
		this.items.push(item);
	}

	// remove items from queue
	dequeue(): T | undefined {
		return this.items.shift();
	}

	// check if queue is empty
	isEmpty(): boolean {
		return this.items.length === 0;
	}

	// get number of items in queue
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

	// function to perform breadth first search algorithm on graph
	// using the queue data structure
	breadthFirstSearch(src: number) {
		// queue
		const queue = new Queue<number>();

		// visited set
		const visited: Set<number> = new Set();

		// enqueue the source node and mark it as visited
		queue.enqueue(src);
		visited.add(src);

		// while queue is not empty
		// dequeue an item and assign it as source
		while (!queue.isEmpty()) {
			src = queue.dequeue()!;
			console.log(`Visited: ${this.nodes[src].data}`);

			for (let i = 0; i < this.matrix[src].length; i++) {
				if (this.matrix[src][i] == 1 && !visited.has(i)) {
					queue.enqueue(i);
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

// perform breadth first search on the graph
graph.breadthFirstSearch(1);

// clear exports
export {};
