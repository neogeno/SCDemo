import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { getTodosFromApi } from '../actions';
import styles from '../styles';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.undone = null;
		this.done = null;
	}

	componentDidMount() {
		getTodosFromApi(store.userID);
	}
	render() {
		this.undone = JSON.parse(store.userTodoInCompleteJSON);
		this.done = JSON.parse(store.userTodoCompleteJSON);
		if (!this.undone || !this.done) {
			return (
				<View style={styles.activityIndicator}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		return (
			<ScrollView style={styles.todoScreenScrollView}>
				<Text h4>Incomplete</Text>
				{this.undone.map((l, i) => (
					<ListItem
						key={`todo_${l.id}`}
						containerStyle={styles.todoItem}
						leftIcon={!l.completed ? { name: 'check-box-outline-blank' } : { name: 'check-box' }}
						title={l.title}
					/>
				))}
				<Text h4>Done</Text>
				{this.done.map((l, i) => (
					<ListItem
						key={`todo_${l.id}`}
						containerStyle={styles.todoItem}
						leftIcon={!l.completed ? { name: 'check-box-outline-blank' } : { name: 'check-box' }}
						title={l.title}
					/>
				))}
			</ScrollView>
		);
	}
}

export default observer(Todos);
