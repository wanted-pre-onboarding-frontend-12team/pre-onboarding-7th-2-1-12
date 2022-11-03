const MILLISECOND_TO_HOUR = 1000 * 60 * 60 * 24;
const DAY1 = 1;

export const isNewDate = (createdDateString: string) =>
	(new Date().getTime() - new Date(createdDateString).getTime()) / MILLISECOND_TO_HOUR <= DAY1;

export const getDay = (day: string) => {
	const days = ['일', '월', '화', '수', '목', '금', '토'];
	const date = new Date(day);

	return `${date.getMonth()}월 ${date.getDay()}일 (${days[date.getDate()]})`;
};
