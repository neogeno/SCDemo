import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import UserList from '../components/userlist';
import styles from '../styles';

class ChooseUserScreen extends React.Component {
	static navigationOptions = {
		title: 'Choose User',
		headerStyle: styles.headerStyle,
		headerTintColor: '#fff',
		headerTitleStyle: styles.headerTitleStyle
	};
	render() {
		return (
			<View testID="chooseUserScreen" style={styles.chooseUserView}>
				<UserList navigation={this.props.navigation} />
			</View>
		);
	}
}

export default observer(ChooseUserScreen);
