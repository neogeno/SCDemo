import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import InfoScreen from './info_screen';
import Posts from './posts_screen';

class Todos extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Todos!</Text>
			</View>
		);
	}
}

class Photos extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Albums!</Text>
			</View>
		);
	}
}

const TabNavigator = createBottomTabNavigator(
	{
		Info: InfoScreen,
		Posts: Posts,
		Todos: Todos,
		Photos: Photos
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

export default createAppContainer(TabNavigator);
