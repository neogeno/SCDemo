/**
 * Sample React Native App for Standard Chartered
 * Author: P. Chugh December 2018
 * https://github.com/neogeno/SCDemo
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button } from 'react-native';
import { observer } from 'mobx-react';
import store from './src/store';
import { Icon } from 'react-native-elements';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
	createStackNavigator,
	createAppContainer,
	createSwitchNavigator,
	createBottomTabNavigator
} from 'react-navigation';
import ChooseUserScreen from './src/screens/choose_user_screen';
import InfoScreen from './src/screens/info_screen';
import Posts from './src/screens/posts_screen';
import Todos from './src/screens/todo_screen';
import Albums from './src/screens/album_screen';
import Photos from './src/screens/photo_screen';

const AlbumStack = createStackNavigator({ Albums: Albums, Photos: Photos });

const TabNavigator = createBottomTabNavigator(
	{
		Info: InfoScreen,
		Posts: Posts,
		Todos: Todos,
		Photos: AlbumStack
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
					case 'Info':
						iconName = `ios-information-circle${focused ? '' : '-outline'}`;
						break;
					case 'Todos':
						iconName = `ios-checkbox${focused ? '' : '-outline'}`;
						break;
					case 'Posts':
						iconName = `ios-chatbubbles`;
						break;
					case 'Photos':
						iconName = `ios-albums`;
						break;
					default:
						break;
				}
				// Return Icon based on current tab selected
				return <Icon name={iconName} type="ionicon" size={horizontal ? 20 : 25} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: '#21AA47',
			inactiveTintColor: 'gray'
		}
	}
);

const Tabs = createAppContainer(TabNavigator);

class TabScreen extends React.Component {
	static navigationOptions = {
		headerLeft: (
			<Icon
				onPress={() => {
					store.userID = 0;
				}}
				name="times"
				type="font-awesome"
				color="#fff"
				iconStyle={{ paddingLeft: 5 }}
			/>
		),
		title: store.title,
		headerStyle: {
			backgroundColor: '#0072AA' // Standard Chartered Logo Color
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
	render() {
		return <Tabs />;
	}
}

const AuthStack = createStackNavigator({ SignIn: ChooseUserScreen });
const AppStack = createStackNavigator({ Home: TabScreen });

const AppContainer = createAppContainer(
	createSwitchNavigator({
		App: AppStack
	})
);

const AuthContainer = createAppContainer(
	createSwitchNavigator({
		App: AuthStack
	})
);

// App Entry point shows the root navigator stack
class App extends Component {
	render() {
		return store.userID == 0 ? <AuthContainer /> : <AppContainer />;
	}
}

export default observer(App);
