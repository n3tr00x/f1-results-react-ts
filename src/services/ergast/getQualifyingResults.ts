import axios from 'axios';
import { QualifyingResults } from './types/Qualifying';

export const getQualifyingResults = async (
	season: number | 'current',
	round: number | 'last',
) => {
	const response = await axios.get<QualifyingResults>(
		`${import.meta.env.VITE_ERGAST_F1_URL}/${season}/${round}/qualifying.json`,
	);
	const qualifyingData = response.data.MRData.RaceTable.Races[0];

	if (!qualifyingData) {
		throw new Error('No qualifying data found for this Grand Prix.');
	}

	const qualifyingResults = qualifyingData.QualifyingResults;
	const results = qualifyingResults.map(driver => ({
		driverId: driver.Driver.driverId,
		position: driver.position,
		number: driver.number,
		name: driver.Driver.givenName,
		lastName: driver.Driver.familyName,
		team: driver.Constructor.name,
		nationality: driver.Driver.nationality,
		code:
			driver.Driver.code ||
			driver.Driver.familyName.slice(0, 3).toLocaleUpperCase(),
		Q1Time: driver.Q1,
		Q2Time: driver?.Q2,
		Q3Time: driver?.Q3,
	}));

	return results;
};
