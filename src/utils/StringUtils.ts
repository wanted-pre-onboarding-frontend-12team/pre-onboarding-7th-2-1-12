export const numberWithCommasConverter = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const queryStringGenerator = (params: Record<string, unknown>, exceptTargetValue?: unknown[]) => {
	const refinedParams = (
		exceptTargetValue
			? Object.fromEntries(Object.entries(params).filter(([key]) => !exceptTargetValue.includes(params[key])))
			: { ...params }
	) as Record<string, string>;

	if (Object.keys(refinedParams).length === 0) return '';

	return `?${new URLSearchParams(refinedParams).toString()}`;
};
