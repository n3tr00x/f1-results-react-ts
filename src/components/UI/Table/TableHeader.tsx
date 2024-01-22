import { ReactNode } from 'react';
import { getTableCellVisibilityClass } from '../../../utils/getTableCellVisibilityClass';

type TableHeaderProps = {
	children: ReactNode;
	visibilityBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export function TableHeader({ children, visibilityBreakpoint }: TableHeaderProps) {
	const visibilityClass = getTableCellVisibilityClass(visibilityBreakpoint);

	return (
		<th className={`px-1 py-3 text-sm uppercase ${visibilityClass}`}>{children}</th>
	);
}
