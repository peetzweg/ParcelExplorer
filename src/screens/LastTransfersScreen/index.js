import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, WebView, FlatList, Text } from 'react-native';
import { Transfer } from '../../components/Transfer';
import { requestLastTransfers } from '../../actions';
import Headline from '../../components/Headline';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		height: '100%',
		width: '100%'
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
				<FlatList
					ListHeaderComponent={<Headline>{'Last Transfers'}</Headline>}
					initialNumToRender={15}
					data={this.props.transfers}
					renderItem={({ item, index }) => <Transfer transfer={item} color={index % 2 === 1} />}
				/>
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
