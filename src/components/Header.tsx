import { Navigation } from './Navigation';

export function Header() {
	return (
		<header className="bg-gradient-to-br from-red-400 to-red-600 p-4 shadow-xl lg:min-h-screen lg:w-[320px] lg:min-w-[240px]">
			<div className="mx-auto my-0 w-full">
				<h1 className="text-center font-f1-bold text-2xl uppercase text-slate-50 md:self-center">
					f1 results
				</h1>
				<Navigation />
			</div>
		</header>
	);
}
