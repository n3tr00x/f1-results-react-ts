import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalContextProvider } from './contexts/ModalContext.tsx';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<App />
			</ModalContextProvider>
		</QueryClientProvider>
	</StrictMode>,
);
