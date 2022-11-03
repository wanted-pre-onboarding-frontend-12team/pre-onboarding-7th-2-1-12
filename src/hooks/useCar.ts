import { getCars } from '@src/apis/car';
import { useQuery } from '@tanstack/react-query';
import { Car } from '@src/types/car';

const useCar = (id: string) => {
	const {
		data: cars,
		isLoading,
		isError,
	} = useQuery<Car[]>(['getCar'], () => getCars(''), {
		refetchOnWindowFocus: false,
	});

	//FIXME: 필터조건으로 params로 받아온 id를 넘기면 될듯하다

	const getCarById = (id: string) => {
		const car = cars?.filter((car) => String(car.id) === id)[0] as Car;
		return car;
	};

	return { car: getCarById(id), isLoading, isError };
};

export default useCar;
