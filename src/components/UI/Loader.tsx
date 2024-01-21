export function Loader() {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<div className="flex gap-1">
				<div className="h-5 w-5 animate-bounce rounded-full bg-red-600"></div>
				<div className="animate-bounce200 h-5 w-5 rounded-full bg-red-600"></div>
				<div className="animate-bounce400 h-5 w-5 rounded-full bg-red-600"></div>
			</div>
		</div>
	);
}
