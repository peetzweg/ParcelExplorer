import ParcelExplorerAPI from '../services/ParcelExplorerAPI';

export const updateParcel = (x, y) => async (dispatch) => {
	const owner = await ParcelExplorerAPI.getOwnerOfLand(x, y);
	const taken = owner !== '0x0000000000000000000000000000000000000000';
	dispatch({ type: 'UPDATE_PARCEL', data: { x, y, owner, state: taken ? 'taken' : 'unowned' } });
};

export const requestLastTransfers = () => async (dispatch) => {
	const transfers = await ParcelExplorerAPI.getLastTransfers();
	dispatch({ type: 'UPDATE_NEW_TRANSFERS', data: transfers });
};
