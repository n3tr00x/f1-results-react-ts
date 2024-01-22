// components
import { Loader } from '../UI/Loader';
import { RaceDetails } from '../RaceDetails';
import { TabSelector } from '../TabSelector';
import { RaceResults } from './RaceResults';
import { QualifyingResults } from './QualifyingResults';
import { SprintResults } from './SprintResults';
// contexts
import { F1SeasonContext } from '../../contexts/F1SeasonContext';
// hooks
import { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// ergast api
import { getRaceInformation } from '../../services/ergast/getRaceInformation';

type Session = 'race' | 'qualifying' | 'sprint';

export function Results() {
	const [selectedSession, setSelectedSession] = useState<Session>('race');
	const { season, round } = useContext(F1SeasonContext);

	const {
		data: raceInfo,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['f1-app', { season, round }],
		queryFn: () => getRaceInformation(season, round),
	});

	const handleSelectedSeasonClick = (session: Session) => {
		setSelectedSession(session);
	};

	if (isPending) {
		return <Loader />;
	}

	if (isError) {
		return <p className="m-4 text-center">{error.message}</p>;
	}

	return (
		<section className="mb-[68px] lg:mb-0">
			<div className="lg:flex lg:w-full lg:justify-evenly">
				<RaceDetails details={raceInfo.details} />
				<TabSelector
					selectedTab={selectedSession}
					onSelect={handleSelectedSeasonClick}
					options={['race', 'qualifying', 'sprint']}
				/>
			</div>
			{selectedSession === 'race' && <RaceResults results={raceInfo.results} />}
			{selectedSession === 'qualifying' && <QualifyingResults />}
			{selectedSession === 'sprint' && <SprintResults />}
		</section>
	);
}
