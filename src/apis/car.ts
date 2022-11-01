import { GET, PATH } from '../constants/api';
import { CarsReponseDto } from '../types/car';
import { requester } from './requester';

export const getCars = async (query: string) => {
	const {
		car: { index },
	} = PATH;

	const { data } = await requester<CarsReponseDto>({
		method: GET,
		url: `${index}${query}`,
	});

	return data.payload;
};
