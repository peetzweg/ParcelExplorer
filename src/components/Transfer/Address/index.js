import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { ParcelColors } from '../../../constants';

const addressStyles = {
	text: {
		fontFamily: 'FiraMono-Regular'
	}
};
const Address = ({ address, short }) => {
	if (short) {
		address = `${address.substr(0, 6)}...${address.substr(-4)}`;
	}

	return <Text style={addressStyles.text}>{address}</Text>;
};

Address.defaultProps = {
	address: '',
	short: false
};

export default Address;
