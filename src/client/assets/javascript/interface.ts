interface Track {
	id: number;
	name: string;
	segments: number[][];
}

interface Racer {
	id: number;
	driver_name: string;
	top_speed: number;
	acceleration: number;
	handling: number;
}

interface Race {
	Cars: Racer[];
	ID: number;
	PlayerID: number;
	Results: {
		positions: Racer[];
		status: string;
	};
	Track: Track;
}

interface RacerPos {
	acceleration: number;
	driver_name: string;
	handling: number;
	id: number;
	segment: number;
	speed: number;
	top_speed: number;
}

interface RaceInfo {
	positions: RacerPos[];
	status: `in-progress` | 'finished' | 'unstarted';
}

interface Store {
	track: {
		id: undefined | string;
		name: undefined | string;
	};
	race_id: undefined | number;
	player_id: undefined | string;
}

