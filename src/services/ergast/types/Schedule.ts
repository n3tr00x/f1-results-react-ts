import { Ergast } from './Ergast';
import { Race } from './Race';

export type Schedule = Ergast<{ RaceTable: { season: string; Races: Race[] } }>;
