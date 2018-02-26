import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, WebView, Text } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		height: '100%',
		width: '100%'
	},
	top: {
		flex: 2
	},
	bottom: {
		flex: 3
	}
});

const DetailedParcelScreen = ({ x, y, parcel }) => (
	<View style={styles.container}>
		<View style={styles.top}>
			<WebView source={{ uri: 'https://aframe.io/aframe/examples/boilerplate/hello-world/' }} />
		</View>
		<View style={styles.bottom}>
			<Text>{parcel ? `${parcel.owner}` : `this is ${x},${y}`}</Text>
		</View>
	</View>
);

const mapStateToProps = (state, ownProps) => ({
	parcel: state.parcels[`${ownProps.x},${ownProps.y}`]
});

export default connect(mapStateToProps)(DetailedParcelScreen);
