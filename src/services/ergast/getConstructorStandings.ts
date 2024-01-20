import axios from 'axios';
import { ConstructorStandings } from './types/Standings';

export const getConstructorStandings = async (
	season: number | 'current',
	round?: number | 'last',
) => {
	const ERGAST_QUERY = round ? `${season}/${round}` : `${season}`;

	const response = await axios.get<ConstructorStandings>(
		`${import.meta.env.VITE_ERGAST_F1_URL}/${ERGAST_QUERY}/constructorStandings.json`,
	);
	const standingsData = response.data.MRData.StandingsTable.StandingsLists[0];

	if (!standingsData) {
		throw new Error('No constructor standings found for the season.');
	}

	const constructorStandings = standingsData.ConstructorStandings;

	const standings = constructorStandings.map(constructor => ({
		constructorId: constructor.Constructor.constructorId,
		position: constructor.position,
		points: constructor.points,
		wins: constructor.wins,
		name: constructor.Constructor.name,
		nationality: constructor.Constructor.nationality,
	}));

	return standings;
};
