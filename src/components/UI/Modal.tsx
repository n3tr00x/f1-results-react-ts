import { MouseEvent, ReactNode, useEffect, useRef } from 'react';
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
			document.body.classList.add('overflow-hidden');
		}

		return () => {
			modal?.close();
			document.body.classList.remove('overflow-hidden');
		};
	}, [isOpen]);

	const handleCloseModal = (event: MouseEvent<HTMLDialogElement>) => {
		const modal = dialog.current;

		if (modal) {
			const modalDimensions = modal.getBoundingClientRect();

			if (
				event.clientX < modalDimensions.left ||
				event.clientX > modalDimensions.right ||
				event.clientY < modalDimensions.top ||
				event.clientY > modalDimensions.bottom
			) {
				modal.close();
			}
		}
	};

	return createPortal(
		<dialog
			ref={dialog}
			className="max-h-[80vh] w-11/12 max-w-[1200px] animate-slide-up rounded-md shadow backdrop:backdrop-blur-xl"
			onClick={handleCloseModal}
			onClose={onClose}
		>
			{children}
		</dialog>,
		document.getElementById('modal')!,
	);
};
