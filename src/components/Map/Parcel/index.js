import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: 30,
		height: 30,
		backgroundColor: '#AFDB8C',
		margin: 1
	}
});

export const Parcel = ({ data, onPress }) => (
	<TouchableOpacity
		onPress={() => {
			onPress(data.x, data.y);
		}}
	>
		<View style={styles.container} />
	</TouchableOpacity>
);
