// components
import { Table } from '../UI/Table/Table';
import { TableHeadersContainer } from '../UI/Table/TableHeadersContainer';
import { TableHeader } from '../UI/Table/TableHeader';
import { TableContentContainer } from '../UI/Table/TableContentContainer';
import { TableRow } from '../UI/Table/TableRow';
import { TableCell } from '../UI/Table/TableCell';
import { TableDriverCell } from '../UI/Table/TableDriverCell';
// contexts
import { F1SeasonContext } from '../../contexts/F1SeasonContext';
// hooks
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
// ergast api
import { getDriverStandings } from '../../services/ergast/getDriverStandings';

export function DriverStandings() {
	const { season, round } = useContext(F1SeasonContext);

	const {
		data: standings,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['f1-app', { season, round }, 'driver-standings'],
		queryFn: () => getDriverStandings(season),
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
				<TableHeader>driver</TableHeader>
				<TableHeader>car</TableHeader>
				<TableHeader>pts</TableHeader>
			</TableHeadersContainer>
			<TableContentContainer>
				{standings.map(driver => (
					<TableRow key={driver.driverId}>
						<TableCell>{driver.position}</TableCell>
						<TableDriverCell
							name={driver.name}
							lastName={driver.lastName}
							code={driver.code}
							nationality={driver.nationality}
						/>
						<TableCell>{driver.team}</TableCell>
						<TableCell>{driver.points}</TableCell>
					</TableRow>
				))}
			</TableContentContainer>
		</Table>
	);
}
