// components
import { Modal } from '../UI/Modal';
import { TabSelector } from '../TabSelector';
import { DriverStandings } from './DriverStandings';
import { ConstructorStandings } from './ConstructorStandings';
// contexts
import { ModalContext } from '../../contexts/ModalContext';
// hooks
import { useContext, useState } from 'react';

type Standings = 'drivers' | 'constructors';

export function Standings() {
	const [selectedStandings, setSelectedStandings] = useState<Standings>('drivers');
	const { index, closeModal } = useContext(ModalContext);

	return (
		<Modal isOpen={index === 'STANDINGS'} onClose={closeModal}>
			<div className="p-4">
				<h2 className="text-center font-f1-bold text-2xl uppercase">Standings</h2>
				<TabSelector
					selectedTab={selectedStandings}
					onSelect={setSelectedStandings}
					options={['drivers', 'constructors']}
				/>
				{selectedStandings === 'drivers' && <DriverStandings />}
				{selectedStandings === 'constructors' && <ConstructorStandings />}
			</div>
		</Modal>
	);
}
