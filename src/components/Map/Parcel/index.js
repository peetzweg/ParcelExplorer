import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ParcelColors } from '../../../constants';
import { updateParcel } from '../../../actions';

const style = {
	width: 30,
	height: 30,
	margin: 1
};

const Parcel = ({ x, y, data, onPress, updateParcel }) => (
	<TouchableOpacity
		onPress={() => {
			updateParcel(x, y);
			onPress(x, y);
		}}
	>
		<View
			style={{
				...style,
				backgroundColor: data ? (data.taken ? ParcelColors.taken : ParcelColors.unowned) : ParcelColors.loading
			}}
		/>
	</TouchableOpacity>
);

export default connect(null, { updateParcel })(Parcel);
