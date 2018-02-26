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

const Parcel = ({ x, y, data, onPress, updateParcel }) => {
	const parcel = (
		<View
			style={{
				...style,
				backgroundColor: data.state ? ParcelColors[data.state] : ParcelColors.loading
			}}
		/>
	);
	const isInfrastructure = data.state ? data.state === 'road' || data.state === 'plaza' : false;
	if (isInfrastructure) {
		return parcel;
	} else {
		return (
			<TouchableOpacity
				onPress={() => {
					updateParcel(x, y);
					onPress(x, y);
				}}
			>
				{parcel}
			</TouchableOpacity>
		);
	}
};

Parcel.defaultProps = {
	data: {}
};

export default connect(null, { updateParcel })(Parcel);
