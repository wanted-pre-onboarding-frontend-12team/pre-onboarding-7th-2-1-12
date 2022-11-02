type attribute = {
	value: string;
	name: string;
	type: string;
};

export const attributeDummyData: attribute[] = [
	{ value: 'ALL', name: '전체', type: 'segment' },
	{ value: 'C', name: '소형', type: 'segment' },
	{ value: 'D', name: '중형', type: 'segment' },
	{ value: 'E', name: '대형', type: 'segment' },
	{ value: 'SUV', name: 'SUV', type: 'segment' },
	{ value: 'gasoline', name: '가솔린', type: 'fuelType' },
	{ value: 'ev', name: '전기', type: 'fuelType' },
	{ value: 'hybrid', name: '하이브리드', type: 'fuelType' },
];
