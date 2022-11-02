import Layout from './components/layout';
import Router from './router';
import SEOMetaTag from './components/shared/SEOMetaTag';

const App = () => {
	return (
		<Layout>
			<SEOMetaTag />
			<Router />
		</Layout>
	);
};
export default App;
