import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { Platform, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import UserList from '../components/userlist';
import { ListItem, Tile, Text, Card, Divider } from 'react-native-elements';
import { getPostsFromApi } from '../actions';
import { getCommentsFromApi } from '../actions';
import CommentsList from '../components/commentslist';

class Posts extends React.Component {
	componentDidMount() {
		console.log('posts component mounted');
		getPostsFromApi(store.userID);
	}

	render() {
		if (store.loading || !store.userPostsJSON) {
			return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		console.log(store.userPostsJSON);
		let postArray = JSON.parse(store.userPostsJSON);
		let ud = JSON.parse(store.userDataJSON);
		return (
			<ScrollView>
				<View style={{ flex: 1, width: '100%', height: '100%' }}>
					{postArray.map((l, i) => (
						<Card
							key={l.id}
							title={
								<ListItem
									key={ud.id}
									leftAvatar={{
										source: { uri: `https://randomuser.me/api/portraits/women/${ud.id}.jpg` },
										size: 'large'
									}}
									containerStyle={{
										justifyContent: 'flex-start',
										borderBottomColor: '#E5E5E5',
										borderBottomWidth: 0.5
									}}
									title={ud.name}
									titleStyle={{ fontWeight: 'bold' }}
									subtitle={ud.email}
								/>
							}
						>
							<Tile
								width="100%"
								height={400}
								imageSrc={require('../images/blueocean.jpg')}
								title={l.title}
								caption={l.body}
								featured
								activeOpacity={1}
							/>
							<CommentsList postID={l.id} />
						</Card>
					))}
				</View>
			</ScrollView>
		);
	}
}

export default observer(Posts);
