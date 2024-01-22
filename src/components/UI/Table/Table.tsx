import { ReactNode } from 'react';

type TableProps = {
	children: ReactNode;
};

export function Table({ children }: TableProps) {
	return <table className="w-full table-auto">{children}</table>;
}
