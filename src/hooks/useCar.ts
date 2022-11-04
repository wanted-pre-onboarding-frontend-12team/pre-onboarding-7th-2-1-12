import { useQuery } from '@tanstack/react-query';
import { getCars } from '@src/apis/car';
import { Car } from '@src/types/car';

const useCar = (id: string) => {
	const {
		data: cars,
		isLoading,
		isError,
	} = useQuery<Car[]>(['getCar'], () => getCars(''), {
		refetchOnWindowFocus: false,
	});

	const getCarById = (id: string) => {
		const car = cars?.filter((car) => String(car.id) === id)[0] as Car;
		return car;
	};

	return { car: getCarById(id), isLoading, isError };
};

export default useCar;
