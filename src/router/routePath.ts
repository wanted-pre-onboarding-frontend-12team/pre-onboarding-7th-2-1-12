type PageKey = 'CAR_LIST' | 'CAR_DETAIL';
type PageValue = '/' | '/detail/:id';

type PATH = Record<PageKey, PageValue>;

const ROUTE_PATH: PATH = {
	CAR_LIST: '/',
	CAR_DETAIL: '/detail/:id',
};

export default ROUTE_PATH;
