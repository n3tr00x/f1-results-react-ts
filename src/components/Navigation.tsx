import { Button } from './UI/Button';

export function Navigation() {
	return (
		<nav className="fixed inset-x-0 bottom-0 bg-gradient-to-br from-red-400 to-red-600 p-4 shadow-xl md:static md:bg-transparent md:from-transparent md:to-transparent md:p-0 md:shadow-none">
			<ul className="flex justify-center gap-4 text-sm text-slate-50">
				<li>
					<Button>Sezon</Button>
				</li>
				<li>
					<Button>Ostatni wyścig</Button>
				</li>
				<li>
					<Button>Grand Prix</Button>
				</li>
			</ul>
		</nav>
	);
}
