import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { Platform, StyleSheet, Text, View } from 'react-native';
import UserList from '../components/userlist';
import { Header } from 'react-native-elements';

class DetailsScreen extends React.Component {
	render() {
		return (
			<View testID="DetailsScreen" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Go Here</Text>
			</View>
		);
	}
}

export default observer(DetailsScreen);
