import { useMemo } from 'react';
import { Car } from '@src/types/car';
import * as S from './styled';
import FormHeader from '../FormHeader';
import FormBody from '../FormBody';
import { getDay } from '@src/utils/DateUtils';
import { carAttributeTable } from '@src/constants/car';
import { numberWithCommasConverter } from '@src/utils/StringUtils';

const DetailForm = ({ car }: { car: Car }) => {
	const day = useMemo(() => getDay(car.startDate), []);

	return (
		<S.Container>
			<FormHeader headerName={'차량정보'} />
			<FormBody name={'차종'} description={carAttributeTable.segmentTable[car.attribute.segment]} />
			<FormBody name={'연료'} description={carAttributeTable.fuelTable[car.attribute.fuelType]} />
			<FormBody name={'이용가능일'} description={`${day}부터`} />

			{car.insurance && (
				<>
					<FormHeader headerName={'보험'} />
					{car.insurance.map((insure: { name: string; description: string }) => (
						<FormBody key={insure.name} name={insure.name} description={insure.description} />
					))}
				</>
			)}
			{car.additionalProducts && (
				<>
					<FormHeader headerName={'추가상품'} />
					{car.additionalProducts.map((product: { name: string; amount: number }) => (
						<FormBody key={product.name} name={product.name} description={`월 ${numberWithCommasConverter(product.amount)} 원`} />
					))}
				</>
			)}
		</S.Container>
	);
};

export default DetailForm;
