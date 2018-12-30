import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { Platform, StyleSheet, Text, View } from 'react-native';
import UserList from '../components/userlist';
import { Header } from 'react-native-elements';

class ChooseUserScreen extends React.Component {
	static navigationOptions = {
		title: 'Choose User',
		// 		defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#0072AA', // Standard Chartered Logo Color
			title: 'Title'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
		// 		}
	};
	render() {
		return (
			<View testID="chooseUserScreen" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<UserList navigation={this.props.navigation} />
			</View>
		);
	}
}

export default observer(ChooseUserScreen);
