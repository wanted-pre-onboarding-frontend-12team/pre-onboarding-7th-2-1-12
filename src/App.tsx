import Layout from './components/layout';
import Router from './router';
import ErrorBoundary from './pages/ErrorPage/ErrorBoundary';
import SEOMetaTag from './components/shared/SEOMetaTag';

const App = () => {
	return (
		<Layout>
			<SEOMetaTag />
			<ErrorBoundary>
				<Router />
			</ErrorBoundary>
		</Layout>
	);
};
export default App;
