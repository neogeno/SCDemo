import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import store from '../store';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { getUsersFromApi } from '../actions';

class UserList extends Component {
	constructor(props) {
		super(props);
		this.arrayHolder = [];
	}

	async componentDidMount() {
		getUsersFromApi();
	}

	render() {
		if (store.loading) {
			return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		this.arrayHolder = JSON.parse(store.userListJSON);
		console.log('userlistarray shown =', this.arrayHolder[0]);
		return (
			<View style={{ flex: 1, width: '100%', height: '100%' }}>
				{this.arrayHolder.map((l, i) => (
					<ListItem
						key={l.id}
						leftAvatar={{
							source: {
								uri: `https://randomuser.me/api/portraits/thumb/women/${l.id}.jpg`
							}
						}}
						title={l.name}
						onPress={() => this.props.navigation.navigate('Details')}
						titleStyle={{ fontWeight: 'bold' }}
						subtitle={l.email}
						chevron
					/>
				))}
			</View>
		);
	}
}
export default observer(UserList);
