import Router from '@src/router';
import { Layout, SEO } from '@src/components';
import { ErrorBoundary } from '@src/pages';

const App = () => {
	return (
		<Layout>
			<SEO />
			<ErrorBoundary>
				<Router />
			</ErrorBoundary>
		</Layout>
	);
};
export default App;
