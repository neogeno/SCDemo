import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem, Text, Icon } from 'react-native-elements';
import { getPhotosFromApi, getAlbumsFromApi } from '../actions';

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
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<ScrollView>
				<View style={{ padding: 10, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
					{this.renderData.map((l, i) => (
						<View
							key={i}
							style={{
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: 150,
								width: 150
							}}
						>
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
							<Text style={{ textAlign: 'center', fontSize: 12 }}>{l.title}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		);
	}
}

export default observer(Albums);
