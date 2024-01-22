import { ReactNode } from 'react';

type TableRowProps = {
	children: ReactNode;
	isFastestLap?: boolean;
};

export function TableRow({ children, isFastestLap }: TableRowProps) {
	return (
		<tr className={`${isFastestLap ? 'font-f1-bold text-purple-700' : ''}`}>
			{children}
		</tr>
	);
}
