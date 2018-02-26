import infrastructure from '../data/GenesisCity_Infrastructure.json';

export const parcels = (state = infrastructure, action) => {
	switch (action.type) {
		case 'UPDATE_PARCEL':
			const { x, y } = action.data;
			return { [`${x},${y}`]: action.data, ...state };
		default:
			return state;
	}
};
