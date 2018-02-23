import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	containerColumn: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	containerRow: {
		position: 'absolute',
		top: 0,
		left: 0
	},
	columnLabel: {
		width: 32,
		justifyContent: 'center',
		alignItems: 'center'
	},
	rowLabel: {
		height: 32,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	title: {
		backgroundColor: 'transparent',
		color: '#ffffff',
		fontWeight: '900',
		fontSize: 12
	}
});

export const CoordinateLabels = ({ data, direction }) => (
	<View style={direction === 'column' ? styles.containerColumn : styles.containerRow} pointerEvents={'box-none'}>
		{data.map((index) => (
			<View
				key={`${direction}_${index}`}
				style={direction === 'column' ? styles.columnLabel : styles.rowLabel}
				pointerEvents={'box-none'}
			>
				<Text style={styles.title}>{index}</Text>
			</View>
		))}
	</View>
);
