import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const createAxiosInstance = () => {
	const base = axios.create({
		baseURL: `https://preonboarding.platdev.net/api`,
	});

	return base;
};

const axiosInstance = createAxiosInstance();

export async function requester<Payload>(option: AxiosRequestConfig) {
	const response: AxiosResponse<Payload> = await axiosInstance({
		headers: {
			'Content-Type': 'application/json',
		},
		...option,
	});
	return {
		status: response.status,
		headers: response.headers,
		data: response.data,
	};
}
