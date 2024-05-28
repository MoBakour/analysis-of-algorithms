// heap data structure implementation
class Heap {
	private items: number[] = [0];

	private minindex(k: number): number {
		if (k * 2 + 1 > this.size()) {
			return k * 2;
		} else if (this.items[k * 2] < this.items[k * 2 + 1]) {
			return k * 2;
		} else {
			return k * 2 + 1;
		}
	}

	private sink(k: number): void {
		while (k * 2 <= this.size()) {
			const mi = this.minindex(k);

			if (this.items[k] > this.items[mi]) {
				[this.items[k], this.items[mi]] = [
					this.items[mi],
					this.items[k],
				];
			} else break;

			k = mi;
		}
	}

	private float(k: number): void {
		const f = Math.floor;

		while (f(k / 2) > 0) {
			if (this.items[k] < this.items[f(k / 2)]) {
				[this.items[k], this.items[f(k / 2)]] = [
					this.items[f(k / 2)],
					this.items[k],
				];
			}

			k = f(k / 2);
		}
	}

	public insert(item: number): void {
		this.items.push(item);
		this.float(this.size());
	}

	public pop(): number {
		if (this.size() === 0) throw Error("Heap is empty");

		const item = this.items[1];
		this.items[1] = this.items[this.size()];
		this.items.pop();
		this.sink(1);
		return item;
	}

	public size(): number {
		return this.items.length - 1;
	}
}

// heap sort function
function heapSort(arr: number[]): number[] {
	// create a heap instance
	const heap = new Heap();

	// insert array items into heap
	arr.forEach((item) => heap.insert(item));

	// create array to store sorted items
	const sorted: number[] = [];

	// pop all elements from the heap
	// and push them into the sorted array
	while (heap.size() > 0) {
		sorted.push(heap.pop());
	}

	return sorted;
}

// test case
const data = [19, 1, 3, 14, 11, 45, 31, 22, 20];
console.log(heapSort(data)); // expected output: [1, 3, 11, 14, 19, 20, 22, 31, 45]

// clear exports
export {};
