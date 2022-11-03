import { Car } from '@src/types/car';
import * as S from './styled';
import FormHeader from '../FormHeader';
import FormBody from '../FormBody';

const DetailForm = ({ car }: { car: Car }) => {
	return (
		<S.Container>
			<FormHeader headerName={'차량정보'} />
			<FormBody name={'차종'} description={car.attribute.segment} />
			<FormBody name={'연료'} description={car.attribute.fuelType} />
			<FormBody name={'이용가능일'} description={`${car.startDate}부터`} />

			{car.insurance && (
				<>
					<FormHeader headerName={'보험'} />
					<FormBody name={'대인'} description={car.insurance[0].description} />
					<FormBody name={'대물'} description={car.insurance[1].description} />
				</>
			)}
			{car.addtionalProduct && (
				<>
					<FormHeader headerName={'추가상품'} />
					<FormBody name={'대물'} description={`월 ${car.addtionalProduct[0].amount} 원`} />
				</>
			)}
		</S.Container>
	);
};

export default DetailForm;
