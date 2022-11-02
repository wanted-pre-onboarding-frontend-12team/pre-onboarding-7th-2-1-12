type attribute = {
	value: string;
	name: string;
	type: string;
};

export const attributeDummyData: attribute[] = [
	{ value: '', name: '전체', type: 'Segment' },
	{ value: 'C', name: '소형', type: 'Segment' },
	{ value: 'D', name: '중형', type: 'Segment' },
	{ value: 'E', name: '대형', type: 'Segment' },
	{ value: 'SUV', name: 'SUV', type: 'Segment' },
	{ value: 'gasoline', name: '가솔린', type: 'fuelType' },
	{ value: 'ev', name: '전기', type: 'fuelType' },
	{ value: 'hybrid', name: '하이브리드', type: 'fuelType' },
];
