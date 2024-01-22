import { convertNationalityToCode } from '../../../utils/convertNationalityToCode';
import { TableCell } from './TableCell';

type TableDriverCellProps = {
	name: string;
	lastName: string;
	code: string;
	nationality: string;
};

export function TableDriverCell({
	name,
	lastName,
	code,
	nationality,
}: TableDriverCellProps) {
	const nationFlag = convertNationalityToCode(nationality);

	return (
		<TableCell>
			<img
				src={nationFlag}
				alt={nationality}
				className="m-1 inline-flex w-5 rounded-full border border-neutral-900 shadow-2xl"
			/>
			<span className="sm:hidden">{code}</span>
			<span className="hidden sm:inline md:hidden">{lastName}</span>
			<span className="hidden md:inline">
				{name} {lastName}
			</span>
		</TableCell>
	);
}
