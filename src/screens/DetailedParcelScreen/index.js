import React from 'react';
import { StyleSheet, View, WebView, Text } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		height: '100%',
		width: '100%'
	},
	top: {
		flex: 1
	},
	bottom: {
		flex: 2
	}
});

export const DetailedParcelScreen = ({ data }) => (
	<View style={styles.container}>
		<View style={styles.top}>
			<WebView source={{ uri: 'https://aframe.io/aframe/examples/boilerplate/hello-world/' }} />
		</View>
		<View style={styles.bottom}>
			<Text>Detailed Parcel Information bla</Text>
		</View>
	</View>
);
