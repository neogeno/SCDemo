/** @format */

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

YellowBox.ignoreWarnings([ 'Warning: Failed prop type: Invalid prop `ImageComponent`', 'Module Avatar' ]);
