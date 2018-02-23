export const updateParcel = (x, y) => (dispatch) => {
	dispatch({ type: 'UPDATE_PARCEL', x, y, data: { taken: true } });
};
