// components
import { Modal } from '../UI/Modal';
import { SeasonDropdown } from './SeasonDropdown';
// contexts
import { ModalContext } from '../../contexts/ModalContext';
// hooks
import { useContext } from 'react';

export function SeasonPicker() {
	const { index, closeModal } = useContext(ModalContext);

	return (
		<Modal isOpen={index === 'SEASONS'} onClose={closeModal}>
			<div className="m-auto w-full max-w-lg p-6">
				<h2 className="mb-3 text-center font-f1-bold text-2xl uppercase">
					season
				</h2>
				<SeasonDropdown />
			</div>
		</Modal>
	);
}
