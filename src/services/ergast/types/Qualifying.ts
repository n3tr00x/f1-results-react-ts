import { Ergast } from './Ergast';
import { Circuit } from './Circuit';
import { Driver } from './Driver';
import { Constructor } from './Constructor';

export type QualifyingResults = Ergast<{ RaceTable: { Races: QualifyingData[] } }>;

type QualifyingData = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: Circuit;
	date: string;
	time: string;
	QualifyingResults: QualifyingResult[];
};

type QualifyingResult = {
	number: string;
	position: string;
	Driver: Driver;
	Constructor: Constructor;
	Q1: string;
	Q2: string;
	Q3: string;
};
