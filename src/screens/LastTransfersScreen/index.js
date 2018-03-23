import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, WebView, FlatList, Text } from 'react-native';
import { Transfer } from '../../components/Transfer';
import { requestLastTransfers } from '../../actions';

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

class LastTransfersScreen extends Component {
	componentWillMount() {
		if (this.props.transfers.length === 0) {
			this.setState({
				loading: true
			});
		}
		this.props.requestLastTransfers();
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList data={this.props.transfers} renderItem={({ item }) => <Transfer transfer={item} />} />
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	transfers: state.transfers
});

LastTransfersScreen.defaultProps = {
	transfers: []
};

export default connect(mapStateToProps, { requestLastTransfers })(LastTransfersScreen);
