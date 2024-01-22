// components
import { Loader } from '../UI/Loader';
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
import { getQualifyingResults } from '../../services/ergast/getQualifyingResults';

export function QualifyingResults() {
	const { season, round } = useContext(F1SeasonContext);

	const {
		data: results,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['f1-app', { season, round }, 'qualifying'],
		queryFn: () => getQualifyingResults(season, round),
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
				<TableHeader>q1</TableHeader>
				<TableHeader>q2</TableHeader>
				<TableHeader>q3</TableHeader>
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
						<TableCell>{driver.Q1Time}</TableCell>
						<TableCell>{driver.Q2Time}</TableCell>
						<TableCell>{driver.Q3Time}</TableCell>
					</TableRow>
				))}
			</TableContentContainer>
		</Table>
	);
}
