/**
 * Sample React Native App for Standard Chartered
 * Author: P. Chugh 
 * https://github.com/neogeno/SCDemo
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './src/store';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ChooseUserScreen from './src/screens/choose_user_screen';
import DetailsScreen from './src/screens/details_screen';

// Top Level Stack Navigator Routes and Screens defined here
const RootStack = createStackNavigator(
	{
		Home: ChooseUserScreen,
		Details: DetailsScreen
	},
	{
		initialRouteName: 'Home'
	}
);

// Init Container to hold all screens in our app
const AppContainer = createAppContainer(RootStack);

// App Entry point shows the screen stack
class App extends Component {
	render() {
		return <AppContainer />;
	}
}

export default observer(App);
