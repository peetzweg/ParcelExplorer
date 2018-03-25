import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import { distanceInWordsStrict } from 'date-fns';
import Address from './Address';
import Coordinates from './Coordinates';

const SUCCESS_IMAGE = require('../../../assets/icons/Success.png');
const ERROR_IMAGE = require('../../../assets/icons/Error.png');

export const Transfer = ({ transfer, color }) => {
	const styles = {
		container: {
			flex: 1,
			height: 40,
			marginBottom: 4,
			flexDirection: 'row',
			backgroundColor: color ? '#F1FBFA' : '#FFFFFF',
			opacity: transfer.success ? 1 : 0.5,
			// justifyContent: 'space-between',
			alignItems: 'center',
			paddingLeft: 16,
			paddingRight: 16
		},
		textContainer: {
			// justifyContent: 'center',
			alignItems: 'center',
			flex: 1
		},
		text: {
			fontFamily: 'FiraMono-Regular'
		}
	};
	return (
		<TouchableOpacity
			onPress={() => {
				console.log(`open transfer ${transfer.id}`);
			}}
		>
			<View style={styles.container}>
				<View style={{ ...styles.textContainer, alignItems: 'flex-start' }}>
					<Text style={styles.text}>{`${distanceInWordsStrict(
						new Date(transfer.timestamp),
						Date.now()
					)} ago`}</Text>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>{`${transfer.x}, ${transfer.y}`}</Text>
				</View>
				<View style={{ ...styles.textContainer, alignItems: 'flex-end' }}>
					<Address address={transfer.transaction} short />
				</View>
			</View>
		</TouchableOpacity>
	);
};

// <View style={styles.content}>
// 			<View style={styles.parties}>
// 				<Address address={transfer.from} short />
// 				<Text>{' > '}</Text>
// 				<Address address={transfer.beneficial} short />
// 			</View>
// 			<View style={styles.status}>
// 				{transfer.success ? <Image source={SUCCESS_IMAGE} /> : <Image source={ERROR_IMAGE} />}

// 				{/* <Text></Text> */}
// 			</View>
// 		</View>
