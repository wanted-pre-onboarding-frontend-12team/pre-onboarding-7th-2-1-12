import { Fuel, Segment } from '@src/types/car';

const fuelTable: Record<Fuel, string> = {
	gasoline: '가솔린',
	hybrid: '하이브리드',
	ev: '전기',
};

const segmentTable: Record<Segment, string> = {
	C: '소형',
	D: '중형',
	E: '대형',
	SUV: 'SUV',
};

export const carAttributeTable = { fuelTable, segmentTable };
