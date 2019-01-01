/**
 * Sample React Native App for Standard Chartered
 * Author: P. Chugh January 1 2019
 * https://github.com/neogeno/SCDemo
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './src/store';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import ChooseUserScreen from './src/screens/choose_user_screen';
import TabScreen from './src/screens/tab_screen';

// Define Login Screen and Main Tabbed App screen
const AuthStack = createStackNavigator({ SignIn: ChooseUserScreen });
const AppStack = createStackNavigator({ Home: TabScreen });

// We use a switch Navigator so there is no top root Level container once the main App screen is shown
const AppContainer = createAppContainer(
	createSwitchNavigator({
		App: AppStack
	})
);
// Prepare Sign in screen container
const AuthContainer = createAppContainer(
	createSwitchNavigator({
		App: AuthStack
	})
);

// App Entry point shows the Sign In Screen if a user is not selected, or the Main App Container with Tabs if user is known
class App extends Component {
	render() {
		return store.userID == 0 ? <AuthContainer /> : <AppContainer />;
	}
}

export default observer(App);
