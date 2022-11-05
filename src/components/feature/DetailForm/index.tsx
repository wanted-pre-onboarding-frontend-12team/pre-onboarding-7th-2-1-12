import { useMemo } from 'react';
import { FormHeader, FormBody } from '@src/components';
import * as S from './styled';
import { Car } from '@src/types/car';
import { carAttributeTable } from '@src/constants/car';
import { getDay } from '@src/utils/DateUtils';
import { numberWithCommasConverter } from '@src/utils/StringUtils';
import { isValidArray } from '@src/utils/ArrayUtils';

const DetailForm = ({ car }: { car: Car }) => {
	const day = useMemo(() => getDay(car.startDate), []);

	return (
		<S.Container>
			<FormHeader headerName={'차량정보'} />
			<FormBody name={'차종'} description={carAttributeTable.segmentTable[car.attribute.segment]} />
			<FormBody name={'연료'} description={carAttributeTable.fuelTable[car.attribute.fuelType]} />
			<FormBody name={'이용가능일'} description={`${day}부터`} />

			{isValidArray(car.insurance) && (
				<>
					<FormHeader headerName={'보험'} />
					{car.insurance?.map((insurance: { name: string; description: string }) => (
						<FormBody key={insurance.name} name={insurance.name} description={insurance.description} />
					))}
				</>
			)}
			{isValidArray(car.additionalProducts) && (
				<>
					<FormHeader headerName={'추가상품'} />
					{car.additionalProducts?.map((product: { name: string; amount: number }) => (
						<FormBody key={product.name} name={product.name} description={`월 ${numberWithCommasConverter(product.amount)} 원`} />
					))}
				</>
			)}
		</S.Container>
	);
};

export default DetailForm;
