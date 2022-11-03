/* eslint no-unused-vars: 0 */
import { Fuel, Segment } from '@src/types/car';

const fuelTable: { [fuel in Fuel]: string } = {
	gasoline: '가솔린',
	hybrid: '하이브리드',
	ev: '전기',
};

const segmentTable: { [segment in Segment]: string } = {
	C: '소형',
	D: '중형',
	E: '대형',
	SUV: 'SUV',
};

export const carAttributeTable = { fuelTable, segmentTable };
