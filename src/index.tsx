import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import App from './App';
import { GlobalStyle, theme } from './styles';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

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
