import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { ParcelColors } from '../../../constants';

const Address = ({ address }) => <Text>{address}</Text>;

Address.defaultProps = {
	address: ''
};

export default Address;
