// Redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Persistence
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import { parcels, transfers } from './src/reducers';

// Navigation
import { Navigation } from 'react-native-navigation';
import MapScreen from './src/screens/MapScreen';
import LastTransfersScreen from './src/screens/LastTransfersScreen';
import DetailedParcelScreen from './src/screens/DetailedParcelScreen';

console.disableYellowBox = true;

const config = {
	key: 'root',
	storage,
	blacklist: []
};
const reducer = persistCombineReducers(config, { parcels, transfers });
const store = createStore(reducer, applyMiddleware(thunk, logger));

persistStore(store, null, () => {
	Navigation.registerComponent('ParcelExplorer.LastTransfersScreen', () => LastTransfersScreen, store, Provider);
	Navigation.registerComponent('ParcelExplorer.MapScreen', () => MapScreen, store, Provider);
	Navigation.registerComponent('ParcelExplorer.DetailedParcelScreen', () => DetailedParcelScreen, store, Provider);

	const iconInsets = {
		top: 6,
		left: 0,
		bottom: -6,
		right: 0
	};
	Navigation.startTabBasedApp({
		tabs: [
			{
				screen: 'ParcelExplorer.LastTransfersScreen',
				icon: require('./assets/icons/TransferLine.png'),
				selectedIcon: require('./assets/icons/TransferSolid.png'),
				navigatorStyle: {
					navBarHidden: true
				},
				iconInsets
			},
			{
				screen: 'ParcelExplorer.DetailedParcelScreen',
				icon: require('./assets/icons/PinLine.png'),
				selectedIcon: require('./assets/icons/PinSolid.png'),
				iconInsets,
				navigatorStyle: {
					navBarHidden: true
				},
				title: 'Screen Two'
			},
			{
				// label: 'Map', // tab label as appears under the icon in iOS (optional)
				screen: 'ParcelExplorer.MapScreen', // unique ID registered with Navigation.registerScreen
				icon: require('./assets/icons/MapLine.png'), // local image asset for the tab icon unselected state (optional on iOS)
				selectedIcon: require('./assets/icons/MapSolid.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
				iconInsets,
				title: 'GENESIS CITY', // title of the screen as appears in the nav bar (optional)
				// titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
				navigatorStyle: {
					navBarHidden: true
				},
				navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
			}
		],
		tabsStyle: {
			// optional, add this if you want to style the tab bar beyond the defaults
			// tabBarButtonColor: '#3CD6AA', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
			tabBarSelectedButtonColor: '#3CD6AA' // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
			// tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
			// initialTabIndex: 0 // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
		},
		appStyle: {
			orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
			// bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
			// bottomTabBadgeBackgroundColor: 'green' // Optional, change badge background color. Android only
			// backButtonImage: require('./pathToImage.png'), // Change the back button default arrow image with provided image. iOS only
			// hideBackButtonTitle: true / false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
		},
		passProps: {} // simple serializable object that will pass as props to all top screens (optional)
		// animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
	});

	// start the app
	// Navigation.startSingleScreenApp({
	// 	screen: {
	// 		screen: 'ParcelExplorer.MapScreen', // unique ID registered with Navigation.registerScreen
	// 		title: 'GENESIS CITY', // title of the screen as appears in the nav bar (optional)
	// 		navigatorStyle: {
	// 			navBarTextColor: '#000000',
	// 			navBarTextFontFamily: 'SourceSansPro-Bold',
	// 			navBarTextFontSize: 18,
	// 			navBarButtonColor: '#3CD6AA',
	// 			navBarBackgroundColor: '#FCFCFC'
	// 		}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
	// 		navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
	// 	},
	// 	passProps: {} // simple serializable object that will pass as props to all top screens (optional)
	// });
});
