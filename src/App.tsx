import Router from '@src/router';
import { Layout, SEOMetaTag } from '@src/components';
import { ErrorBoundary } from '@src/pages';

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
