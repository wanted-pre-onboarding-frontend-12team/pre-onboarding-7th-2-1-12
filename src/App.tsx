import Layout from './components/layout';
import Router from './router';
import ErrorBoundary from './pages/ErrorPage/ErrorBoundary';

const App = () => {
	return (
		<Layout>
			<ErrorBoundary>
				<Router />
			</ErrorBoundary>
		</Layout>
	);
};
export default App;
