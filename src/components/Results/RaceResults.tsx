// components
import { Table } from '../UI/Table/Table';
import { TableHeadersContainer } from '../UI/Table/TableHeadersContainer';
import { TableHeader } from '../UI/Table/TableHeader';
import { TableContentContainer } from '../UI/Table/TableContentContainer';
import { TableRow } from '../UI/Table/TableRow';
import { TableCell } from '../UI/Table/TableCell';
import { TableDriverCell } from '../UI/Table/TableDriverCell';

type Result = {
	driverId: string;
	position: string;
	name: string;
	lastName: string;
	points: string;
	code: string;
	nationality: string;
	number: string;
	team: string;
	grid: string;
	time: string;
	laps: string;
	isFastestLap: boolean;
};

type RaceResultsProps = { results: Result[] };

export function RaceResults({ results }: RaceResultsProps) {
	return (
		<Table>
			<TableHeadersContainer>
				<TableHeader>
					<span className="hidden md:inline">position</span>
					<span className="md:hidden">pos</span>
				</TableHeader>
				<TableHeader visibilityBreakpoint="lg">number</TableHeader>
				<TableHeader>driver</TableHeader>
				<TableHeader visibilityBreakpoint="lg">car</TableHeader>
				<TableHeader visibilityBreakpoint="md">laps</TableHeader>
				<TableHeader>time</TableHeader>
				<TableHeader>
					<span className="hidden md:inline">points</span>
					<span className="md:hidden">pts</span>
				</TableHeader>
			</TableHeadersContainer>
			<TableContentContainer>
				{results.map(driver => (
					<TableRow key={driver.driverId} isFastestLap={driver.isFastestLap}>
						<TableCell>{driver.position}</TableCell>
						<TableCell visibilityBreakpoint="lg">{driver.number}</TableCell>
						<TableDriverCell
							name={driver.name}
							lastName={driver.lastName}
							code={driver.code}
							nationality={driver.nationality}
						/>
						<TableCell visibilityBreakpoint="lg">{driver.team}</TableCell>
						<TableCell visibilityBreakpoint="md">{driver.laps}</TableCell>
						<TableCell>{driver.time}</TableCell>
						<TableCell>{driver.points}</TableCell>
					</TableRow>
				))}
			</TableContentContainer>
		</Table>
	);
}
