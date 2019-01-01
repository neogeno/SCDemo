import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { View, ActivityIndicator } from 'react-native';
import styles from '../styles';
import { getPhotosFromApi } from '../actions';
import ImageBrowser from 'react-native-interactive-image-gallery';

class Photos extends React.Component {
	static navigationOptions = { header: null };

	constructor(props) {
		super(props);
		this.albumid = this.props.albumid;
		this.renderData = null;
	}

	componentDidMount() {
		getPhotosFromApi(store.selectedAlbumID);
	}

	render() {
		this.renderData = JSON.parse(store.userPhotoJSON);
		if (!this.renderData) {
			return (
				<View style={styles.activityIndicator}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		return (
			<ImageBrowser
				onPressImage={() => console.log('image pressed')}
				infoTitleStyles={styles.photoTitle}
				images={this.renderData}
			/>
		);
	}
}

export default observer(Photos);
