export type Fuel = 'gasoline' | 'hybrid' | 'ev' | 'hybrid';
export type Segment = 'C' | 'D' | 'E' | 'SUV';

export type Insurance = {
	name: string;
	description: string;
};

export type AdditionalProduct = {
	name: string;
	amount: number;
};

export type Attribute = {
	brand: string;
	name: string;
	segment: Segment;
	fuel: Fuel;
	imageUrl: string;
};

export type Car = {
	id: number;
	amount: number;
	attribute: Attribute;
	startDate: string;
	createdAt: string;
	insurance?: Insurance[];
	addtionalProduct?: AdditionalProduct[];
};
