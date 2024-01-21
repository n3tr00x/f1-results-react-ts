// main react method
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// contexts
import { ModalContextProvider } from './contexts/ModalContext';
// components
import { App } from './App.tsx';
import { SeasonPicker } from './components/SeasonPicker/SeasonPicker';
// main css file
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<App />
				<SeasonPicker />
			</ModalContextProvider>
		</QueryClientProvider>
	</StrictMode>,
);
