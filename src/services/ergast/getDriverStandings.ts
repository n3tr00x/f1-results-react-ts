import axios from 'axios';
import { DriverStandings } from './types/Standings';

export const getDriverStandings = async (
	season: number | 'current',
	round?: number | 'last',
) => {
	const ERGAST_QUERY = round ? `${season}/${round}` : `${season}`;

	const response = await axios.get<DriverStandings>(
		`${import.meta.env.VITE_ERGAST_F1_URL}/${ERGAST_QUERY}/driverStandings.json`,
	);
	const standingsData = response.data.MRData.StandingsTable.StandingsLists[0];

	if (!standingsData) {
		throw new Error('No found driver standings data in the season.');
	}

	const driverStandings = standingsData.DriverStandings;
	const standings = driverStandings.map(driver => ({
		driverId: driver.Driver.driverId,
		position: driver.position,
		points: driver.points,
		wins: driver.wins,
		name: driver.Driver.givenName,
		lastName: driver.Driver.familyName,
		code:
			driver.Driver.code ||
			driver.Driver.familyName.slice(0, 3).toLocaleUpperCase(),
		nationality: driver.Driver.nationality,
		team: driver.Constructors[0].name,
	}));

	return standings;
};
