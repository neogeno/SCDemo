import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem, Text, Icon, Too } from 'react-native-elements';
import { getTodosFromApi, getAlbumsFromApi, getPhotosFromApi } from '../actions';
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
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<Tooltip popover={<Text>Info here</Text>}>
				<ImageBrowser
					onPressImage={() => console.log('image pressed')}
					infoTitleStyles={{ fontSize: 20 }}
					images={this.renderData}
				/>
			</Tooltip>
		);
	}
}

export default observer(Photos);
