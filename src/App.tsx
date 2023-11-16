import { ModalContextProvider } from './contexts/ModalContext';
import { Header } from './components/Header';
import { SeasonPickerModal } from './components/modals/SeasonPicker';

export function App() {
	return (
		<ModalContextProvider>
			<Header />
			<SeasonPickerModal />
		</ModalContextProvider>
	);
}
