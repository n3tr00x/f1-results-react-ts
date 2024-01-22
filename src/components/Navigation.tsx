import { useContext } from 'react';
import { Button } from './UI/Button';
import { ModalContext } from '../contexts/ModalContext';
import { F1SeasonContext } from '../contexts/F1SeasonContext';

export function Navigation() {
	const { openSeasonsModal, openCalendarModal, openStandingsModal } =
		useContext(ModalContext);
	const { updateRound, updateSeason } = useContext(F1SeasonContext);

	const handleLatestRaceClick = () => {
		updateSeason('current');
		updateRound('last');
	};

	return (
		<nav className="fixed inset-x-0 bottom-0 bg-gradient-to-br from-red-400 to-red-600 p-4 lg:static lg:bg-transparent lg:from-transparent lg:to-transparent">
			<ul className="flex justify-center gap-2 text-xs text-slate-50 lg:flex-col lg:text-sm">
				<li>
					<Button onClick={openSeasonsModal}>Season</Button>
				</li>
				<li>
					<Button onClick={handleLatestRaceClick}>Latest race</Button>
				</li>
				<li>
					<Button onClick={openCalendarModal}>Schedule</Button>
				</li>
				<li>
					<Button onClick={openStandingsModal}>Standings</Button>
				</li>
			</ul>
		</nav>
	);
}
