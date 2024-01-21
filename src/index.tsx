// main react method
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// contexts
import { ModalContextProvider } from './contexts/ModalContext';
import { F1SeasonContextProvider } from './contexts/F1SeasonContext';
// components
import { App } from './App.tsx';
import { SeasonPicker } from './components/SeasonPicker/SeasonPicker';
// main css file
import './index.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<F1SeasonContextProvider>
					<App />
					<SeasonPicker />
				</F1SeasonContextProvider>
			</ModalContextProvider>
		</QueryClientProvider>
	</StrictMode>,
);
