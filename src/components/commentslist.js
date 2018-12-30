import { observer } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import store from '../store';
import { getCommentsFromApi } from '../actions';

class CommentsList extends Component {
	constructor(props) {
		super(props);
		this.postID = this.props.postID;
		this.renderArray = observable([]);
	}

	componentDidMount() {
		getCommentsFromApi(this.postID);
	}

	render() {
		this.renderArray = store.userCommentsArray.filter((k) => k.every((e) => e.postId == this.postID));
		if (this.renderArray.length == 0) {
			return (
				<View style={{ paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator />
				</View>
			);
		}
		console.log('Rendering comments for postid and index', this.postID);
		console.log(this.renderArray);
		return (
			<View style={{ flex: 1, width: '100%', height: '100%' }}>
				{this.renderArray[0].map((l, i) => (
					<View key={`comment_${this.postID}_${l.id}`}>
						<ListItem
							containerStyle={{
								justifyContent: 'flex-start',
								borderTopColor: '#E5E5E5',
								borderTopWidth: 0.5
							}}
							leftAvatar={{
								source: {
									uri: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`
								}
							}}
							title={l.email}
							subtitle={l.name}
						/>
						<Text style={{ paddingBottom: 10 }}>{l.body}</Text>
					</View>
				))}
			</View>
		);
	}
}

export default observer(CommentsList);
