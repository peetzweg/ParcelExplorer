import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollView, { ScrollViewChild } from 'react-native-directed-scrollview';
import range from 'lodash/range';
import { Parcel } from './Parcel';
import { CoordinateLabels } from './CoordinateLabels';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	contentContainer: {
		height: 3200,
		width: 3200
	},
	rowLabelsContainer: {
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		width: 100
	},
	columnLabelsContainer: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		height: 30
	},
	rowContainer: {
		flexDirection: 'row'
	}
});

class ParcelView extends Component {
	render() {
		return (
			<ScrollView
				bounces={true}
				bouncesZoom={true}
				maximumZoomScale={1}
				minimumZoomScale={1}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}
				style={styles.container}
			>
				<ScrollViewChild scrollDirection={'both'}>
					<View>
						{range(50, -50, -1).map((y) => (
							<View key={`row_${y}`} style={styles.rowContainer}>
								{range(-50, 50, 1).map((x) => (
									<Parcel key={`${x},${y}`} data={{ x, y, taken: true }} />
								))}
							</View>
						))}
					</View>
				</ScrollViewChild>
				<ScrollViewChild scrollDirection={'vertical'} style={styles.rowLabelsContainer}>
					<CoordinateLabels data={range(50, -50, -1)} direction={'row'} />
				</ScrollViewChild>
				<ScrollViewChild scrollDirection={'horizontal'} style={styles.columnLabelsContainer}>
					<CoordinateLabels data={range(-50, 50, 1)} direction={'column'} />
				</ScrollViewChild>
			</ScrollView>
		);
	}
}

export default ParcelView;
