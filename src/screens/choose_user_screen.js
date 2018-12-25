import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { Platform, StyleSheet, Text, View } from 'react-native';
import UserList from '../components/userlist';
import { Header } from 'react-native-elements';

class ChooseUserScreen extends React.Component {
	static navigationOptions = {
		title: 'Standard Chartered Demo'
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
