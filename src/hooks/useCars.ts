import { useQuery } from '@tanstack/react-query';
import { getCars } from '@src/apis/car';
import { Car } from '@src/types/car';

const useCars = (queyString: string = '') => {
	const { data: cars, isLoading, isError, isFetching } = useQuery<Car[]>(['getCars', queyString], () => getCars(queyString));

	const isEmptyCars = (cars: Car[] | undefined) => !cars || cars.length === 0;

	return { cars, isLoading, isError, isFetching, isEmtpy: isEmptyCars(cars) };
};

export default useCars;
