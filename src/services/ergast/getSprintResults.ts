import axios from 'axios';
import { SprintQualifyingResults } from './types/Sprint';

export const getSprintResults = async (
	season: number | 'current',
	round: number | 'last',
) => {
	const response = await axios.get<SprintQualifyingResults>(
		`${import.meta.env.VITE_ERGAST_F1_URL}/${season}/${round}/sprint.json`,
	);
	const sprintData = response.data.MRData.RaceTable.Races[0];

	if (!sprintData) {
		throw new Error('No found sprint data for this Grand Prix.');
	}

	const sprintResults = sprintData.SprintResults;
	const data = sprintResults.map(driver => ({
		driverId: driver.Driver.driverId,
		position: driver.position,
		name: driver.Driver.givenName,
		lastName: driver.Driver.familyName,
		points: driver.points,
		code:
			driver.Driver.code ||
			driver.Driver.familyName.slice(0, 3).toLocaleUpperCase(),
		nationality: driver.Driver.nationality,
		number: driver.number,
		team: driver.Constructor.name,
		grid: driver.grid,
		time: driver?.Time?.time || driver.status,
		laps: driver.laps,
	}));

	return data;
};
