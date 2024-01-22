import { ReactNode } from 'react';

export function TableContentContainer({ children }: { children: ReactNode }) {
	return (
		<tbody className="hover:cursor-pointer [&>*:nth-child(even)]:bg-slate-50 hover:[&>*:nth-child(even)]:bg-gray-200 hover:[&>*:nth-child(odd)]:bg-slate-100">
			{children}
		</tbody>
	);
}
