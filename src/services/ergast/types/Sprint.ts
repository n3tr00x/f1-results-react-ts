import { Ergast } from './Ergast';
import { Circuit } from './Circuit';
import { Driver } from './Driver';
import { Constructor } from './Constructor';
import { Time } from './Time';

export type SprintQualifyingResults = Ergast<{ RaceTable: { Races: SprintData[] } }>;

type SprintData = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: Circuit;
	date: string;
	time: string;
	SprintResults: SprintResult[];
};

type SprintResult = {
	number: string;
	position: string;
	positionText: string;
	points: string;
	Driver: Driver;
	Constructor: Constructor;
	grid: string;
	laps: string;
	status: string;
	Time: Time;
	FastestLap: FastestLap;
};

type FastestLap = {
	lap: string;
	Time: { time: string };
};
