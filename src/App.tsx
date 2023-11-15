import { ModalContextProvider } from './contexts/ModalContext';
import { Header } from './components/Header';

export function App() {
	return (
		<ModalContextProvider>
			<Header />
		</ModalContextProvider>
	);
}
