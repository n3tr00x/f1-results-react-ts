import { ReactNode, createContext, useState } from 'react';

type IndexModalType = 'SEASONS' | 'CALENDAR' | null;

type ModalContextType = {
	index: IndexModalType;
	openSeasonsModal: () => void;
	openCalendarModal: () => void;
	closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
	index: null,
	openCalendarModal: () => {},
	openSeasonsModal: () => {},
	closeModal: () => {},
});

type ContextProviderProps = { children: ReactNode };

export function ModalContextProvider({ children }: ContextProviderProps) {
	const [indexModal, setIndexModal] = useState<IndexModalType>(null);

	const openSeasonsModal = () => {
		setIndexModal('SEASONS');
	};

	const openCalendarModal = () => {
		setIndexModal('CALENDAR');
	};

	const closeModal = () => {
		setIndexModal(null);
	};

	const valueContext = {
		index: indexModal,
		openSeasonsModal,
		openCalendarModal,
		closeModal,
	};

	return <ModalContext.Provider value={valueContext}>{children}</ModalContext.Provider>;
}
