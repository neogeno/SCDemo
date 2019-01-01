import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem, Tile, Card } from 'react-native-elements';
import { getPostsFromApi } from '../actions';
import CommentsList from '../components/commentslist';
import styles from '../styles';

class Posts extends React.Component {
	componentDidMount() {
		console.log('posts component mounted');
		getPostsFromApi(store.userID);
	}

	render() {
		if (store.loading || !store.userPostsJSON) {
			return (
				<View style={styles.activityIndicator}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		console.log(store.userPostsJSON);
		let postArray = JSON.parse(store.userPostsJSON);
		let ud = JSON.parse(store.userDataJSON);
		return (
			<ScrollView>
				<View style={styles.postScreenView}>
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
									containerStyle={styles.postScreenCard}
									title={ud.name}
									titleStyle={styles.postScreenCardTitle}
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
