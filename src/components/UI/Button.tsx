import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className="rounded-md p-2 outline-red-900 transition-colors hover:bg-red-600 active:bg-red-700 active:shadow-md"
		>
			{props.children}
		</button>
	);
}
