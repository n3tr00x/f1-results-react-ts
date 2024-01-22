// components
import { Loader } from '../UI/Loader';
import { Table } from '../UI/Table/Table';
import { TableHeadersContainer } from '../UI/Table/TableHeadersContainer';
import { TableHeader } from '../UI/Table/TableHeader';
import { TableContentContainer } from '../UI/Table/TableContentContainer';
import { TableRow } from '../UI/Table/TableRow';
import { TableCell } from '../UI/Table/TableCell';
import { TableDriverCell } from '../UI/Table/TableDriverCell';
// hooks
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
// contexts
import { F1SeasonContext } from '../../contexts/F1SeasonContext';
// services
import { getSprintResults } from '../../services/ergast/getSprintResults';

export function SprintResults() {
	const { season, round } = useContext(F1SeasonContext);

	const {
		data: results,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['f1-app', { season, round }, 'sprint'],
		queryFn: () => getSprintResults(season, round),
	});

	if (isPending) {
		return <Loader />;
	}

	if (isError) {
		return <p className="text-center">{error.message}</p>;
	}

	return (
		<Table>
			<TableHeadersContainer>
				<TableHeader>pos</TableHeader>
				<TableHeader visibilityBreakpoint="sm">number</TableHeader>
				<TableHeader>driver</TableHeader>
				<TableHeader visibilityBreakpoint="md">car</TableHeader>
				<TableHeader visibilityBreakpoint="md">laps</TableHeader>
				<TableHeader>time/retired</TableHeader>
				<TableHeader>pts</TableHeader>
			</TableHeadersContainer>
			<TableContentContainer>
				{results.map(driver => (
					<TableRow key={driver.driverId}>
						<TableCell>{driver.position}</TableCell>
						<TableCell visibilityBreakpoint="sm">{driver.number}</TableCell>
						<TableDriverCell
							name={driver.name}
							lastName={driver.lastName}
							code={driver.code}
							nationality={driver.nationality}
						/>
						<TableCell visibilityBreakpoint="md">{driver.team}</TableCell>
						<TableCell visibilityBreakpoint="md">{driver.laps}</TableCell>
						<TableCell>{driver.time}</TableCell>
						<TableCell>{driver.points}</TableCell>
					</TableRow>
				))}
			</TableContentContainer>
		</Table>
	);
}
