import { useContext } from 'react';
import { Modal } from '../../UI/Modal';
import { ModalContext } from '../../../contexts/ModalContext';
import { SeasonPicker } from './SeasonPicker';

export function SeasonPickerModal() {
	const { index, closeModal } = useContext(ModalContext);

	return (
		<Modal isOpen={index === 'SEASONS'} onClose={closeModal}>
			<div className="m-auto w-full max-w-lg p-6">
				<h2 className="mb-3 text-center font-mt-bold text-2xl uppercase">
					wybierz sezon
				</h2>
				<SeasonPicker />
			</div>
		</Modal>
	);
}
