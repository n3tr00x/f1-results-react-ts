// contexts
import { ModalContext } from '../../contexts/ModalContext';
import { F1SeasonContext } from '../../contexts/F1SeasonContext';
// hooks
import { useContext } from 'react';
// utilities
import { convertCountryToCode } from '../../utils/convertCountryToCode';

type RaceEvent = {
	round: string;
	raceName: string;
	date: string;
	time: string;
	country: string;
	location: string;
	circuitId: string;
	isSprintWeekend: boolean;
};

type RaceEventProps = { details: RaceEvent };

export function RaceEvent({ details }: RaceEventProps) {
	const { updateRound } = useContext(F1SeasonContext);
	const { closeModal } = useContext(ModalContext);

	const nationFlag = convertCountryToCode(details.country);

	const handleRaceEventClick = () => {
		updateRound(+details.round);
		closeModal();
	};

	return (
		<li>
			<button
				className="relative flex w-full justify-between rounded-md border-2 border-gray-200 bg-slate-100 px-4 py-6 shadow-sm hover:bg-slate-200 active:shadow-lg"
				onClick={handleRaceEventClick}
			>
				<img
					className="w-12 rounded-full border-slate-400 drop-shadow-xl sm:w-16 lg:w-20"
					src={nationFlag}
					alt=""
				/>
				<div className="self-center">
					<p className="text-[13px] lg:text-base">
						<span className="font-f1-bold">{details.country}</span> (
						{new Date(details.date).toLocaleDateString()})
					</p>
					<p className="font-f1-italic text-xs">{details.raceName}</p>
				</div>
			</button>
		</li>
	);
}
