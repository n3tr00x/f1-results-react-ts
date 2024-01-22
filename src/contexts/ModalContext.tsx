import { ReactNode, createContext, useState } from 'react';

type IndexModalType = 'SEASONS' | 'CALENDAR' | 'STANDINGS' | null;

type ModalContextType = {
	index: IndexModalType;
	openSeasonsModal: () => void;
	openCalendarModal: () => void;
	openStandingsModal: () => void;
	closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>(null!);

type ContextProviderProps = { children: ReactNode };

export function ModalContextProvider({ children }: ContextProviderProps) {
	const [indexModal, setIndexModal] = useState<IndexModalType>(null);

	const openSeasonsModal = () => {
		setIndexModal('SEASONS');
	};

	const openCalendarModal = () => {
		setIndexModal('CALENDAR');
	};

	const openStandingsModal = () => {
		setIndexModal('STANDINGS');
	};

	const closeModal = () => {
		setIndexModal(null);
	};

	const valueContext = {
		index: indexModal,
		openSeasonsModal,
		openCalendarModal,
		openStandingsModal,
		closeModal,
	};

	return <ModalContext.Provider value={valueContext}>{children}</ModalContext.Provider>;
}
