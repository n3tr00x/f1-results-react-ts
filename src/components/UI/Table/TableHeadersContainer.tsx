import { ReactNode } from 'react';

export function TableHeadersContainer({ children }: { children: ReactNode }) {
	return (
		<thead className="bg-red-500 text-slate-50">
			<tr>{children}</tr>
		</thead>
	);
}
