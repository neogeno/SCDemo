import { observer } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import store from '../store';
import { getCommentsFromApi } from '../actions';
import styles from '../styles';

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
				<View style={styles.activityIndicator}>
					<ActivityIndicator />
				</View>
			);
		}
		console.log('Rendering comments for postid and index', this.postID);
		console.log(this.renderArray);
		return (
			<View style={styles.commentListView}>
				{this.renderArray[0].map((l, i) => (
					<View key={`comment_${this.postID}_${l.id}`}>
						<ListItem
							containerStyle={styles.commentListItem}
							leftAvatar={{
								source: {
									uri: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`
								}
							}}
							title={l.email}
							subtitle={l.name}
						/>
						<Text style={styles.commentListBodyText}>{l.body}</Text>
					</View>
				))}
			</View>
		);
	}
}

export default observer(CommentsList);
