import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle, theme } from './styles';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			useErrorBoundary: true,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<RecoilRoot>
							<GlobalStyle />
							<App />
						</RecoilRoot>
					</ThemeProvider>
				</QueryClientProvider>
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
