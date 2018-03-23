import Axios from 'axios';

const ParcelExplorerServer = 'http://95.216.4.49:3030';
class ParcelExplorerAPI {
	constructor() {}
	getOwnerOfLand(x, y) {
		if (Number.isInteger(x) && Number.isInteger(y)) {
			return new Promise((resolve, reject) => {
				Axios.get(`${ParcelExplorerServer}/owner_of`, {
					params: {
						x,
						y
					}
				}).then((response) => {
					resolve(response.data);
				});
				// TODO reject
			});
		}
		return Promise.resolve();
	}

	getLastTransfers() {
		return new Promise((resolve, reject) => {
			Axios.get(`${ParcelExplorerServer}/land_transfers`, {
				params: {
					'$sort[block]': -1
				}
			}).then((response) => {
				resolve(response.data.data);
			});
			// TODO reject
		});
	}
}

export default new ParcelExplorerAPI();
