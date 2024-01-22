import { ReactNode } from 'react';
import { getTableCellVisibilityClass } from '../../../utils/getTableCellVisibilityClass';

type TableCellProps = {
	children: ReactNode;
	visibilityBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export function TableCell({ children, visibilityBreakpoint }: TableCellProps) {
	const visibilityClass = getTableCellVisibilityClass(visibilityBreakpoint);

	return (
		<td className={`px-2 py-4 text-xs uppercase ${visibilityClass}`}>{children}</td>
	);
}
