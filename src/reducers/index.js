import infrastructure from '../data/GenesisCity_Infrastructure.json';
import uniqBy from 'lodash/uniqBy';

export const parcels = (state = infrastructure, action) => {
	switch (action.type) {
		case 'UPDATE_PARCEL':
			const { x, y } = action.data;
			return { [`${x},${y}`]: action.data, ...state };
		default:
			return state;
	}
};

export const transfers = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_NEW_TRANSFERS':
			// TODO check if updating state is necessary
			return uniqBy([ ...action.data, ...state ], 'transaction');
		default:
			return state;
	}
};
