import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ScrollView, { ScrollViewChild } from 'react-native-directed-scrollview';
import range from 'lodash/range';
import Parcel from './Parcel';
import { CoordinateLabels } from './CoordinateLabels';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	contentContainer: {
		height: 1632,
		width: 1632,
		backgroundColor: '#ffffff'
	},
	parcelsContainer: {
		marginTop: 32,
		marginLeft: 32
	},
	rowLabelsContainer: {
		position: 'absolute',
		left: 0,
		top: 32,
		bottom: 0,
		width: 100
	},
	columnLabelsContainer: {
		position: 'absolute',
		left: 32,
		top: 0,
		right: 0,
		height: 32
	},
	rowContainer: {
		flexDirection: 'row'
	}
});

const CORDS = {
	yCords: range(25, -25, -1),
	xCords: range(-25, 25, 1)
};

const Map = ({ parcels, onParcelPress }) => (
	<ScrollView
		bounces={true}
		bouncesZoom={true}
		maximumZoomScale={1.75}
		minimumZoomScale={0.5}
		showsHorizontalScrollIndicator={false}
		showsVerticalScrollIndicator={false}
		contentContainerStyle={styles.contentContainer}
		style={styles.container}
	>
		<ScrollViewChild scrollDirection={'both'} style={styles.parcelsContainer}>
			<View>
				{CORDS.yCords.map((y) => (
					<View key={`row_${y}`} style={styles.rowContainer}>
						{CORDS.xCords.map((x) => (
							<Parcel
								key={`parcel_${x},${y}`}
								x={x}
								y={y}
								data={parcels[`${x},${y}`]}
								onPress={onParcelPress}
							/>
						))}
					</View>
				))}
			</View>
		</ScrollViewChild>
		<ScrollViewChild scrollDirection={'horizontal'} style={styles.columnLabelsContainer}>
			<CoordinateLabels data={CORDS.xCords} direction={'column'} />
		</ScrollViewChild>
		<ScrollViewChild scrollDirection={'vertical'} style={styles.rowLabelsContainer}>
			<CoordinateLabels data={CORDS.yCords} direction={'row'} />
		</ScrollViewChild>
	</ScrollView>
);

const mapStateToProps = (state) => ({
	parcels: state.parcels
});
export default connect(mapStateToProps)(Map);
