import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import store from '../store';
import { observer } from 'mobx-react';
import { getUsersFromApi } from '../actions';
import styles from '../styles';

class UserList extends Component {
	static navigationOptions = {
		title: 'Home'
	};

	constructor(props) {
		super(props);
		this.arrayHolder = [];
	}

	async componentDidMount() {
		getUsersFromApi();
	}

	render() {
		this.arrayHolder = JSON.parse(store.userListJSON);
		if (this.arrayHolder == null) {
			return (
				<View style={styles.activityIndicator}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		return (
			<View style={styles.userListView}>
				{this.arrayHolder.map((l, i) => (
					<ListItem
						key={'user_' + l.id}
						testID={'user_' + l.id}
						leftAvatar={{
							source: {
								uri: `https://randomuser.me/api/portraits/thumb/women/${l.id}.jpg`
							}
						}}
						title={l.name}
						onPress={() => {
							store.userID = l.id;
							store.userDataJSON = JSON.stringify(l);
							this.props.navigation.navigate('App');
						}}
						titleStyle={styles.userListTitle}
						subtitle={`@ ${l.username}`}
						chevron
					/>
				))}
			</View>
		);
	}
}
export default observer(UserList);
