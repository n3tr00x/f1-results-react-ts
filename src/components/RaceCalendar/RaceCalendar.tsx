// components 
import { Modal } from '../UI/Modal';
import { Loader } from '../UI/Loader';
import { RaceEvent } from './RaceEvent';
// contexts
import { ModalContext } from '../../contexts/ModalContext';
import { F1SeasonContext } from '../../contexts/F1SeasonContext';
// hooks
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
// utilities
import { getRaceSchedule } from '../../services/ergast/getRaceSchedule';


export function RaceCalendar() {
	const { index, closeModal } = useContext(ModalContext);
	const { season } = useContext(F1SeasonContext);

	const {
		data: races,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['f1-app', { season }],
		queryFn: () => getRaceSchedule(season),
	});

	return (
		<Modal isOpen={index === 'CALENDAR'} onClose={closeModal}>
			<div className="p-8">
				<h2 className="mb-6 text-center font-f1-bold text-2xl uppercase">
					Schedule
				</h2>
				<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{isPending && <Loader />}
					{isError && <p>{error.message}</p>}
					{races?.map(details => (
						<RaceEvent
							key={`${details.round}-${details.circuitId}`}
							details={details}
						/>
					))}
				</ul>
			</div>
		</Modal>
	);
}
