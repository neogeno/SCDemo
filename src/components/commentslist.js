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
					<ListItem
						key={`comment_${this.postID}_${l.id}`}
						containerStyle={{
							justifyContent: 'flex-start',
							borderBottomColor: '#E5E5E5',
							borderBottomWidth: 0.5
						}}
						leftAvatar={{
							source: {
								uri: `https://randomuser.me/api/portraits/thumb/men/${l.id}.jpg`
							}
						}}
						title={l.email}
						titleStyle={{ fontWeight: 'bold' }}
						subtitle={l.body}
					/>
				))}
			</View>
		);
	}
}

export default observer(CommentsList);
