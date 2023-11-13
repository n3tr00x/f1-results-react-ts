import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
};

export const Modal = function Modal({ children, isOpen, onClose }: ModalProps) {
	const dialog = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const modal = dialog.current;

		if (isOpen) {
			modal?.showModal();
		}

		return () => modal?.close();
	}, [isOpen]);

	return createPortal(
		<dialog
			ref={dialog}
			className="w-full backdrop:backdrop-blur-xl"
			onClose={onClose}
		>
			{children}
		</dialog>,
		document.getElementById('modal')!,
	);
};
