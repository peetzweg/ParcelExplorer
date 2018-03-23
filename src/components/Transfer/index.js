import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Address from './Address';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	}
});

export const Transfer = ({ transfer }) => (
	<View>
		<Text>{`${transfer.x},${transfer.y}`}</Text>
		<Text>From</Text>
		<Address address={transfer.from} />
		<Text>To</Text>
		<Address address={transfer.beneficial} />
	</View>
);
