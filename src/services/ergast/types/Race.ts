import { Circuit } from './Circuit';

export type Race = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	date: string;
	time: string;
	Circuit: Circuit;
	FirstPractice: Session;
	SecondPractice: Session;
	ThirdPractice: Session;
	Qualifying: Session;
	Sprint?: Session;
};

type Session = {
	date: string;
	time: string;
};
