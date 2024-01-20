import { Ergast } from './Ergast';

export type SeasonList = Ergast<{ SeasonTable: { Seasons: Season[] } }>;

type Season = {
	season: string;
	url: string;
};
