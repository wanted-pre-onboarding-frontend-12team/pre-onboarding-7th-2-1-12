import { atom } from 'recoil';

export type CarFilter = {
	value: string;
	name: string;
	type: string;
};

export const defaultFilters = {
	SEGMENT: 'ALL-segment',
	FUEL: 'ALL-fuel',
};

export const segmentFilterAtom = atom<CarFilter>({
	key: 'segmentFilterAtom',
	default: {
		value: defaultFilters.SEGMENT,
		name: '전체',
		type: 'segment',
	},
});

export const fuelFilterAtom = atom<CarFilter>({
	key: 'fuelFilterAtom',
	default: {
		value: defaultFilters.FUEL,
		name: '전체',
		type: 'fuel',
	},
});
