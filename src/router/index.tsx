import { Route, Routes } from 'react-router-dom';
import { checkArray } from '../utils/checkArray';
import ROUTE_PATH from './routePath';
import CarList from '../pages/CarList';
import CarDetail from '../pages/CarDetail';

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
