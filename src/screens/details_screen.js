import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { Platform, StyleSheet, Text, View } from 'react-native';
import UserList from '../components/userlist';
import { Header, Avatar } from 'react-native-elements';
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

const TabNavigator = createBottomTabNavigator({
	Info: InfoScreen,
	Posts: Posts,
	Todos: Todos,
	Photos: Photos
});

export default createAppContainer(TabNavigator);
