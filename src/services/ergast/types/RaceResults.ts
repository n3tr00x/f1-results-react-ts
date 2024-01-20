import { Circuit } from './Circuit';
import { Ergast } from './Ergast';
import { Result } from './Result';

export type RaceResults = Ergast<{ RaceTable: { Races: RaceData[] } }>;

type RaceData = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: Circuit;
	date: string;
	time: string;
	Results: Result[];
};
