import { useMemo } from 'react';

const generateYearsArray = () => {
	const startYear = 1950;
	const currentYear = new Date().getFullYear();

	const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
		const year = currentYear - index;
		const value = year === currentYear ? 'current' : year;

		return {
			value: value,
			year: year,
		};
	});

	return yearsArray;
};

export function SeasonPicker() {
	const options = useMemo(generateYearsArray, []);

	return (
		<select
			size={5}
			className="w-full rounded-md border-2 border-red-500 p-2 text-center outline-red-900"
		>
			{options.map(option => (
				<option
					key={option.value}
					value={option.value}
					className="cursor-pointer p-3"
				>
					{option.year}
				</option>
			))}
		</select>
	);
}
