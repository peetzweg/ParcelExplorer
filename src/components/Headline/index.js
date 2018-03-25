import React from 'react';
import { StyleSheet, Text } from 'react-native';

const style = {
	fontFamily: 'SourceSansPro-Bold',
	fontSize: 36,
	margin: 16
	// color: '#3E3A69'
};
const Headline = ({ children }) => <Text style={style}>{children}</Text>;

export default Headline;
