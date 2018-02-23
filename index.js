import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// reducers
import { parcels } from './src/reducers';

import { Navigation } from 'react-native-navigation';
import MapScreen from './src/screens/MapScreen';
import { DetailedParcelScreen } from './src/screens/DetailedParcelScreen';

console.disableYellowBox = true;
const reducer = combineReducers({ parcels });
const store = createStore(reducer, applyMiddleware(thunk, logger));
Navigation.registerComponent('ParcelExplorer.MapScreen', () => MapScreen, store, Provider);
Navigation.registerComponent('ParcelExplorer.DetailedParcelScreen', () => DetailedParcelScreen, store, Provider);

// start the app
Navigation.startSingleScreenApp({
	screen: {
		screen: 'ParcelExplorer.MapScreen', // unique ID registered with Navigation.registerScreen
		title: 'MAP', // title of the screen as appears in the nav bar (optional)
		navigatorStyle: {
			navBarTextColor: '#000000',
			navBarTextFontFamily: 'Avenir',
			navBarTextFontSize: 18,
			navBarButtonColor: '#3CD6AA',
			navBarBackgroundColor: '#FCFCFC'
		}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
		navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
	},
	passProps: {} // simple serializable object that will pass as props to all top screens (optional)
});
