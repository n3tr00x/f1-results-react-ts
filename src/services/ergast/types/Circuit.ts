export type Circuit = {
	circuitId: string;
	url: string;
	circuitName: string;
	Location: Location;
};

type Location = {
	lat: string;
	long: string;
	locality: string;
	country: string;
};
