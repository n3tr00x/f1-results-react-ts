// utilities
import { convertCountryToCode } from '../utils/convertCountryToCode';

type Details = {
	season: string;
	round: string;
	country: string;
	location: string;
	raceName: string;
	date: string;
};

type RaceDetailsProps = { details: Details };

export function RaceDetails({ details }: RaceDetailsProps) {
	const nationFlag = convertCountryToCode(details.country);

	return (
		<section className="relative my-4 max-w-screen-lg rounded-xl border border-slate-300 bg-slate-200 p-4 shadow-md lg:w-1/2">
			<span className="absolute right-[-0.5rem] top-[-0.5rem] rounded-md bg-red-500 px-5 py-1 text-sm text-white">
				R{details.round} ({details.season})
			</span>
			<div className="flex gap-2">
				<img
					src={nationFlag}
					alt={details.country + ' nation flag'}
					className="max-w-[64px] flex-auto rounded-full border-2 border-neutral-900 drop-shadow-xl"
				/>
				<div className="flex-auto self-center">
					<h2 className="text-center font-f1-bold text-sm lg:text-base">
						{details.raceName}
					</h2>
					<p className="text-center font-f1-italic text-xs lg:text-sm">
						{new Date(details.date).toLocaleDateString()} - {details.location}
					</p>
				</div>
			</div>
		</section>
	);
}
