import { ReactNode, createContext, useState } from 'react';

type IndexModalType = 'SEASONS' | 'CIRCUITS' | null;

type ModalContextType = {
	index: IndexModalType;
	openSeasonsModal: () => void;
	openCircuitsModal: () => void;
	closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
	index: null,
	openCircuitsModal: () => {},
	openSeasonsModal: () => {},
	closeModal: () => {},
});

type ContextProviderProps = { children: ReactNode };

export function ModalContextProvider({ children }: ContextProviderProps) {
	const [indexModal, setIndexModal] = useState<IndexModalType>(null);

	const openSeasonsModal = () => {
		setIndexModal('SEASONS');
	};

	const openCircuitsModal = () => {
		setIndexModal('CIRCUITS');
	};

	const closeModal = () => {
		setIndexModal(null);
	};

	const valueContext = {
		index: indexModal,
		openSeasonsModal,
		openCircuitsModal,
		closeModal,
	};

	return (
		<ModalContext.Provider value={valueContext}>
			{children}
		</ModalContext.Provider>
	);
}
