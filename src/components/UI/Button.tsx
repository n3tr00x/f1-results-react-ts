import { ReactNode } from 'react';

type ButtonProps = { children: ReactNode };

export function Button({ children }: ButtonProps) {
	return (
		<button className="rounded-md p-2 hover:bg-red-600 hover:shadow-md focus:bg-red-700 focus:shadow-md">
			{children}
		</button>
	);
}
