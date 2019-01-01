/** @format */

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

YellowBox.ignoreWarnings([ 'Warning: Failed prop type: Invalid prop `ImageComponent`', 'Module Avatar' ]);
YellowBox.ignoreWarnings([
	'Warning: Failed prop type: Invalid prop `width` of type `string` supplied to `FeaturedTile',
	'Module FeaturedTile'
]);
YellowBox.ignoreWarnings([
	'Warning: Failed prop type: Invalid prop `width` of type `string` supplied to `Tile`',
	'Module Tile'
]);
YellowBox.ignoreWarnings([
	'You should only render one navigator explicitly in your app, and other navigators should be rendered by including them in that navigator.'
]);
YellowBox.ignoreWarnings([ 'Module RNIKInteractiveImageLibrary requires main queue setup since it overrides ' ]);
//RNIKInteractiveImageLibrary

// Module RNIKInteractiveImageLibrary requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`.
