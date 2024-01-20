import { Driver } from './Driver';
import { Constructor } from './Constructor';
import { Time } from './Time';

export type Result = {
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
	rank: string;
	lap: string;
	Time: { time: string };
	AverageSpeed: {
		units: string;
		speed: string;
	};
};
