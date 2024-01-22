// components
import { Header } from './components/Header';
import { Results } from './components/Results/Results';

export function App() {
	return (
		<div className="lg:flex">
			<Header />
			<main className="mx-4 max-w-screen-lg lg:relative lg:mx-auto lg:w-full lg:px-4">
				<Results />
			</main>
		</div>
	);
}
