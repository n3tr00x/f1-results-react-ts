import { HighlightedBar } from './UI/HighlightedBar';

type TabSelectorProps<T> = {
	selectedTab: T;
	onSelect: (option: T) => void;
	options: T[];
};

export function TabSelector<T>({ selectedTab, onSelect, options }: TabSelectorProps<T>) {
	return (
		<nav className="my-6 flex justify-center gap-4 md:self-center">
			{options.map((option, index) => (
				<button
					key={index}
					className="relative uppercase"
					onClick={() => onSelect(option)}
				>
					{typeof option === 'string' && <span>{option}</span>}
					{selectedTab === option && <HighlightedBar />}
				</button>
			))}
		</nav>
	);
}
