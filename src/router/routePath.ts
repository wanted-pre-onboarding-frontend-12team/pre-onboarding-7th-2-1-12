type PageKey = 'CAR_LIST' | 'CAR_DETAIL' | 'ERROR';
type PageValue = '/' | '/detail/:id' | '*';

type PATH = Record<PageKey, PageValue>;

const ROUTE_PATH: PATH = {
	CAR_LIST: '/',
	CAR_DETAIL: '/detail/:id',
	ERROR: '*',
};

export default ROUTE_PATH;
