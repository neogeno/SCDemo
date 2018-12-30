import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getTodosFromApi } from '../actions';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.renderData = null;
	}

	componentDidMount() {
		getTodosFromApi(store.userID);
	}
	render() {
		this.renderData = JSON.parse(store.userTodoJSON);
		if (!this.renderData) {
			return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		return (
			<ScrollView>
				{this.renderData.map((l, i) => (
					<ListItem
						key={`todo_${l.id}`}
						containerStyle={{
							justifyContent: 'flex-start',
							borderBottomColor: '#E5E5E5',
							borderBottomWidth: 0.5
						}}
						leftIcon={!l.completed ? { name: 'check-box-outline-blank' } : { name: 'check-box' }}
						title={l.title}
					/>
				))}
			</ScrollView>
		);
	}
}

export default observer(Todos);
