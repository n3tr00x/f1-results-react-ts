// components
import { Table } from '../UI/Table/Table';
import { TableHeadersContainer } from '../UI/Table/TableHeadersContainer';
import { TableHeader } from '../UI/Table/TableHeader';
import { TableContentContainer } from '../UI/Table/TableContentContainer';
import { TableRow } from '../UI/Table/TableRow';
import { TableCell } from '../UI/Table/TableCell';
import { NationFlag } from '../UI/NationFlag';
// contexts
import { F1SeasonContext } from '../../contexts/F1SeasonContext';
// hooks
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
// ergast api
import { getConstructorStandings } from '../../services/ergast/getConstructorStandings';

export function ConstructorStandings() {
	const { season, round } = useContext(F1SeasonContext);

	const {
		data: standings,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['f1-app', { season, round }, 'constructor-standings'],
		queryFn: () => getConstructorStandings(season),
	});

	if (isPending) {
		return <p className="text-center">Loading...</p>;
	}

	if (isError) {
		return <p className="text-center">{error.message}</p>;
	}

	return (
		<Table>
			<TableHeadersContainer>
				<TableHeader>pos</TableHeader>
				<TableHeader>team</TableHeader>
				<TableHeader>pts</TableHeader>
			</TableHeadersContainer>
			<TableContentContainer>
				{standings.map(constructor => (
					<TableRow key={constructor.constructorId}>
						<TableCell>{constructor.position}</TableCell>
						<TableCell>
							<NationFlag nationality={constructor.nationality} />
							<span>{constructor.name}</span>
						</TableCell>
						<TableCell>{constructor.points}</TableCell>
					</TableRow>
				))}
			</TableContentContainer>
		</Table>
	);
}
