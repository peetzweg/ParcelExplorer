export const parcels = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_PARCEL':
			const { x, y, data } = action;
			return { ...state, [`${x},${y}`]: { x, y, data } };
		default:
			return state;
	}
};
