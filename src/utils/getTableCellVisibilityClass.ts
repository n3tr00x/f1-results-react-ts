type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;

export const getTableCellVisibilityClass = (breakpoint: Breakpoint) => {
	switch (breakpoint) {
		case 'sm':
			return 'hidden sm:table-cell';
		case 'md':
			return 'hidden md:table-cell';
		case 'lg':
			return 'hidden lg:table-cell';
		case 'xl':
			return 'hidden xl:table-cell';
		case '2xl':
			return 'hidden 2xl:table-cell';
		default:
			return '';
	}
};
