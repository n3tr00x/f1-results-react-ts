import { Ergast } from './Ergast';
import { Constructor } from './Constructor';
import { Driver } from './Driver';

export type DriverStandings = Ergast<{
	StandingsTable: { StandingsLists: DriverStandingsData[] };
}>;

export type ConstructorStandings = Ergast<{
	StandingsTable: { StandingsLists: ConstructorStandingsData[] };
}>;

type ConstructorStandingsData = {
	season: string;
	round: string;
	ConstructorStandings: ConstructorInfoInStandings[];
};

type ConstructorInfoInStandings = {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Constructor: Constructor;
};

type DriverStandingsData = {
	season: string;
	round: string;
	DriverStandings: DriverInfoInStandings[];
};

type DriverInfoInStandings = {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Driver: Driver;
	Constructors: Constructor[];
};
