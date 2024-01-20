export type Ergast<T> = {
	MRData: {
		xmlns: string;
		series: string;
		limit: string;
		offset: string;
		total: string;
	} & T;
};
