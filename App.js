import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Map from './src/components/Map';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Map />
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
