import ParcelExplorerAPI from '../services/ParcelExplorerAPI';

export const updateParcel = (x, y) => async (dispatch) => {
	const owner = await ParcelExplorerAPI.getOwnerOfLand(x, y);
	const taken = owner !== '0x0000000000000000000000000000000000000000';
	dispatch({ type: 'UPDATE_PARCEL', x, y, data: { taken, owner } });
};
