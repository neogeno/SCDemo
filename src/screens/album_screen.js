import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { View, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { getAlbumsFromApi } from '../actions';
import styles from '../styles';

class Albums extends React.Component {
	static navigationOptions = { header: null };

	constructor(props) {
		super(props);
		this.renderData = null;
	}

	componentDidMount() {
		getAlbumsFromApi(store.userID);
	}

	render() {
		this.renderData = JSON.parse(store.userAlbumJSON);
		if (!this.renderData) {
			return (
				<View style={styles.loading}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<ScrollView>
				{Platform.OS == 'ios' ? (
					<Text style={{ textAlign: 'center', fontSize: 18, padding: 10 }}>
						iOS: Swipe inwards from Left edge to return to App Menu, Swipe Up/Down to exit Full Screen Mode
					</Text>
				) : null}
				<View style={styles.album}>
					{this.renderData.map((l, i) => (
						<View key={i} style={styles.albumIcon}>
							<Icon
								type="material-community"
								name="folder-multiple-image"
								size={100}
								color="#78ADD2"
								width="75%"
								onPress={() => {
									store.selectedAlbumID = l.id;
									this.props.navigation.navigate('Photos');
								}}
							/>
							<Text style={styles.albumTitle}>{l.title}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		);
	}
}

export default observer(Albums);
