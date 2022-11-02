import { Route, Routes } from 'react-router-dom';
import { checkArray } from '../utils/checkArray';
import ROUTE_PATH from './routePath';
import { CarList, CarDetail, Error } from '../pages';

export default function Router() {
	const routeList = [
		{
			id: 1,
			path: ROUTE_PATH.CAR_LIST,
			element: <CarList />,
		},
		{
			id: 2,
			path: ROUTE_PATH.CAR_DETAIL,
			element: <CarDetail />,
		},
		{
			id: 3,
			path: ROUTE_PATH.ERROR,
			element: <Error />,
		},
	];

	return (
		<Routes>
			{checkArray(routeList) &&
				routeList.map(({ id, path, element }) => {
					return <Route key={id} path={path} element={element} />;
				})}
		</Routes>
	);
}
