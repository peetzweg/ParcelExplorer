import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Map } from '../../components/Map';

class MapScreen extends Component {
	_openDetailedParcelScreen = (x, y) => {
		this.props.navigator.push({
			screen: 'ParcelExplorer.DetailedParcelScreen',
			title: `PARCEL ${x},${y}`,
			backButtonTitle: '',
			passProps: { x, y }
		});
	};

	render() {
		const { parcels } = this.props;
		return (
			<View style={styles.container}>
				<Map parcels={parcels} onParcelPress={this._openDetailedParcelScreen} />
			</View>
		);
	}
}
const mapStateToProps = (state) => ({
	parcels: state.parcels
});
export default connect(mapStateToProps)(MapScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	}
});
