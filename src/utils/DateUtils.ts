const MILLISECOND_TO_HOUR = 1000 * 60 * 60 * 24;
const DAY1 = 1;

export const isNewDate = (createdDateString: string) =>
	(new Date().getTime() - new Date(createdDateString).getTime()) / MILLISECOND_TO_HOUR <= DAY1;
