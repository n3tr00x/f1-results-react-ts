import { ReactNode, createContext, useReducer } from 'react';

type Actions =
	| { type: 'UPDATE_SEASON'; payload: number | 'current' }
	| { type: 'UPDATE_ROUND'; payload: number | 'last' };

type State = {
	season: number | 'current';
	round: number | 'last';
};

type F1SeasonContextType = State & {
	updateSeason: (season: number | 'current') => void;
	updateRound: (round: number | 'last') => void;
};

export const F1SeasonContext = createContext<F1SeasonContextType>(null!);

const reducer = (state: State, action: Actions) => {
	switch (action.type) {
		case 'UPDATE_SEASON':
			return { ...state, season: action.payload };
		case 'UPDATE_ROUND':
			return { ...state, round: action.payload };
		default:
			throw new Error('Not found the action.');
	}
};

export function F1SeasonContextProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, {
		season: 'current',
		round: 'last',
	});

	const updateSeason = (season: number | 'current') => {
		dispatch({ type: 'UPDATE_SEASON', payload: season });
	};

	const updateRound = (round: number | 'last') => {
		dispatch({ type: 'UPDATE_ROUND', payload: round });
	};

	const value = {
		season: state.season,
		round: state.round,
		updateSeason,
		updateRound,
	};

	return <F1SeasonContext.Provider value={value}>{children}</F1SeasonContext.Provider>;
}
