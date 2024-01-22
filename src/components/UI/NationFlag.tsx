import { convertNationalityToCode } from '../../utils/convertNationalityToCode';

type NationFlagProps = { nationality: string };

export function NationFlag({ nationality }: NationFlagProps) {
	const nationFlag = convertNationalityToCode(nationality);

	return (
		<img
			src={nationFlag}
			alt={nationality}
			className="m-1 inline-flex w-5 rounded-full border border-neutral-900 shadow-2xl"
		/>
	);
}
