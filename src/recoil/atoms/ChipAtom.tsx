import { atom } from 'recoil';

export interface Chip {
	value: string;
	name: string;
	type: string;
}

export const SegmentAtom = atom<Chip>({
	key: 'SegmentAtom',
	default: {
		value: 'ALL-segment',
		name: '전체',
		type: 'segment',
	},
});

export const fuelTypeAtom = atom<Chip>({
	key: 'fuelTypeAtom',
	default: {
		value: 'ALL-fuel',
		name: '전체',
		type: 'fuelType',
	},
});
