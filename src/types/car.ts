export type Fuel = 'gasoline' | 'hybrid' | 'ev';
export type Segment = 'C' | 'D' | 'E' | 'SUV';

export type Insurance = {
	name: string;
	description: string;
};

export type AdditionalProducts = {
	name: string;
	amount: number;
};

export type Attribute = {
	brand: string;
	name: string;
	segment: Segment;
	fuelType: Fuel;
	imageUrl: string;
};

export type Car = {
	id: number;
	amount: number;
	attribute: Attribute;
	startDate: string;
	createdAt: string;
	insurance?: Insurance[];
	additionalProducts?: AdditionalProducts[];
};

export type CarsReponseDto = {
	payload: Car[];
};
