import axios from 'axios';
import { Schedule } from './types/Schedule';

export const getRaceSchedule = async (season: number | 'current') => {
	const response = await axios.get<Schedule>(
		`${import.meta.env.VITE_ERGAST_F1_URL}/${season}.json`,
	);
	const schedule = response.data.MRData.RaceTable.Races;

	if (schedule.length === 0) {
		throw new Error('No races found in the season.');
	}

	const data = schedule.map(race => ({
		round: race.round,
		raceName: race.raceName,
		date: race.date,
		time: race.time,
		country: race.Circuit.Location.country,
		location: race.Circuit.Location.locality,
		circuitId: race.Circuit.circuitId,
		isSprintWeekend: race.Sprint ? true : false,
	}));

	return data;
};
