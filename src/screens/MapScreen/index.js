import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Map from '../../components/Map';

export default class MapScreen extends Component {
	_openDetailedParcelScreen = (x, y) => {
		this.props.navigator.push({
			screen: 'ParcelExplorer.DetailedParcelScreen',
			title: `PARCEL ${x},${y}`
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Map onParcelPress={this._openDetailedParcelScreen} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	}
});
