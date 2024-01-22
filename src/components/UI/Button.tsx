import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className="whitespace-nowrap rounded-md p-2 outline-red-900 transition-colors hover:bg-red-600 active:shadow-md md:w-full lg:py-3"
		>
			{props.children}
		</button>
	);
}
