import { Navigation } from './Navigation';

export function Header() {
	return (
		<header className="bg-gradient-to-br from-red-400 to-red-600 p-4 shadow-xl">
			<div className="mx-auto my-0 w-full max-w-[1200px] md:flex md:justify-between">
				<h1 className="md:b text-center font-mt-bold text-2xl uppercase text-slate-50 md:self-center">
					f1 results
				</h1>
				<Navigation />
			</div>
		</header>
	);
}
