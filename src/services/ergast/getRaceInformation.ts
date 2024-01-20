import axios from 'axios';
import { RaceResults } from './types/RaceResults';

export const getRaceInformation = async (
	season: number | 'current',
	round: number | 'last',
) => {
	const response = await axios.get<RaceResults>(
		`${import.meta.env.VITE_ERGAST_F1_URL}/${season}/${round}/results.json`,
	);
	const raceData = response.data.MRData.RaceTable.Races[0];

	if (!raceData) {
		throw new Error('No found race information for the Grand Prix.');
	}

	const raceResults = raceData.Results;

	const details = {
		season: raceData.season,
		round: raceData.round,
		country: raceData.Circuit.Location.country,
		location: raceData.Circuit.Location.locality,
		raceName: raceData.raceName,
		date: raceData.date,
	};

	const results = raceResults.map(driver => ({
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
		isFastestLap: driver?.FastestLap?.rank === '1',
	}));

	return {
		results,
		details,
	};
};
