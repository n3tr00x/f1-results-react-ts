import { useContext, useMemo } from 'react';
import { F1SeasonContext } from '../../contexts/F1SeasonContext';
import { ModalContext } from '../../contexts/ModalContext';

const generateYearsArray = () => {
	const startYear = 1950;
	const currentYear = new Date().getFullYear();

	const yearsArray = Array.from(
		{ length: currentYear - startYear + 1 },
		(_, index) => currentYear - index,
	);

	return yearsArray;
};

export function SeasonDropdown() {
	const { updateSeason, updateRound, season } = useContext(F1SeasonContext);
	const { closeModal } = useContext(ModalContext);
	const options = useMemo(generateYearsArray, []);

	const handleSeasonClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const season = event.target.value;

		updateSeason(+season);
		updateRound(1);
		closeModal();
	};

	return (
		<select
			size={5}
			className="w-full rounded-md border-2 border-red-500 p-3 text-center outline-red-900"
			onChange={handleSeasonClick}
			value={season === 'current' ? 'default' : season}
		>
			<option className="p-3" value="default" disabled>
				-- choose a season --
			</option>
			{options.map(option => {
				return (
					<option key={option} value={option} className="cursor-pointer p-3">
						{option}
					</option>
				);
			})}
		</select>
	);
}
