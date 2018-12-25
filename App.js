/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './src/store';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { getUsersFromApi } from './src/actions';
const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

class App extends Component {
	async componentDidMount() {
		getUsersFromApi();
	}

	render() {
		return (
			<View testID="welcome" style={styles.container}>
				<Text style={styles.welcome}>Welcome to the Standard Chartered Demo!</Text>
				<Text style={styles.instructions}>Cross Platform</Text>
				<Text style={styles.instructions}>{JSON.stringify(store.userlist[0])}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

export default observer(App);
