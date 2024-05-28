type Person = {
	name: string;
	partner?: string;
	preferences: string[];
};

class StableMarriage {
	private men: Person[];
	private women: Person[];

	constructor(men: Person[], women: Person[]) {
		this.men = men;
		this.women = women;
	}

	public match(): void {
		// create a copy of this.men array
		const freeMen = [...this.men];

		// as long as there are free men waiting to be engaged
		while (freeMen.length > 0) {
			// select man
			const man = freeMen.shift()!;

			// find woman on top of man's preferences
			const woman = this.women.find((w) => w.name === man.preferences[0]);

			// if woman is free, engage man to woman
			// else, if man is prefered over current woman's partner
			//      then disengage woman from current partner
			//      and engage man to woman
			if (!woman) continue;

			if (!woman.partner) {
				this.engage(man, woman);
			} else {
				const womanPartner = this.men.find(
					(m) => m.name === woman.partner
				);

				if (womanPartner && this.prefers(man, woman)) {
					this.disengage(womanPartner, woman);
					this.engage(man, woman);
					freeMen.push(womanPartner);
				} else {
					freeMen.push(man);
				}
			}

			// remove woman from man's preferences
			man.preferences = man.preferences.filter((w) => w !== woman.name);
		}

		// print matches
		this.printMatches();
	}

	// function to find if woman prefers man over current partner
	private prefers(man: Person, woman: Person): boolean {
		if (!woman.partner) return false;

		return (
			woman.preferences.indexOf(man.name) <
			woman.preferences.indexOf(woman.partner)
		);
	}

	// function to engage man to woman
	private engage(man: Person, woman: Person): void {
		man.partner = woman.name;
		woman.partner = man.name;
	}

	// function to disengage man from woman
	private disengage(man: Person, woman: Person): void {
		man.partner = undefined;
		woman.partner = undefined;
	}

	// function to print matches
	public printMatches(): void {
		for (const man of this.men) {
			console.log(`Man: ${man.name} + Woman: ${man.partner}`);
		}
	}
}

// test case:
const sampleMen = [
	{
		name: "A",
		preferences: ["X", "Y", "Z"],
	},
	{
		name: "B",
		preferences: ["Y", "X", "Z"],
	},
	{
		name: "C",
		preferences: ["X", "Z", "Y"],
	},
];

const sampleWomen = [
	{
		name: "X",
		preferences: ["A", "B", "C"],
	},
	{
		name: "Y",
		preferences: ["B", "A", "C"],
	},
	{
		name: "Z",
		preferences: ["A", "B", "C"],
	},
];

const marriageInstance = new StableMarriage(sampleMen, sampleWomen);
marriageInstance.match();

// clear exports
export {};
