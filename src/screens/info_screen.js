import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { withNavigation } from 'react-navigation';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';
import UserList from '../components/userlist';
import { ListItem, Tile, Text, Divider, Button } from 'react-native-elements';
import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import MyBackButton from '../components/backbutton';

const styles = StyleSheet.create({
	container: {
		height: 200,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	map: {
		...StyleSheet.absoluteFillObject
	}
});

class InfoScreen extends React.Component {
	render() {
		let ud = JSON.parse(store.userDataJSON);
		let LatLng = {
			latitude: parseFloat(ud.address.geo.lat),
			longitude: parseFloat(ud.address.geo.lng)
		};
		let region = {
			latitude: parseFloat(ud.address.geo.lat),
			longitude: parseFloat(ud.address.geo.lng),
			latitudeDelta: 30,
			longitudeDelta: 30
		};
		return (
			<ScrollView style={{ padding: 10 }}>
				<Button onPress={() => console.log(this.props.navigation)} />
				<ListItem
					key={ud.id}
					leftAvatar={{
						size: 140,
						source: { uri: `https://randomuser.me/api/portraits/women/${ud.id}.jpg` }
					}}
					title={ud.name}
					titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
					subtitle={'\n' + `☏ ${ud.phone}` + '\n\n' + `✉︎ ${ud.email}`}
					subtitleStyle={{ width: 200 }}
				/>
				<ListItem title="Works at" subtitle={ud.company.name} rightTitle={ud.website} />
				<View style={{ height: 130 }}>
					<Text h4 style={{ textAlign: 'center' }}>
						"{ud.company.catchPhrase}"
					</Text>
					<Text style={{ textAlign: 'center' }}>{'\n'}Favourite Catchphrase</Text>
				</View>
				<View style={{ height: 130 }}>
					<Text h4 style={{ textAlign: 'center' }}>
						"{ud.company.bs}"
					</Text>
					<Text style={{ textAlign: 'center' }}>{'\n'}Corporate BS</Text>
				</View>
				<View style={styles.container}>
					<MapView provider={PROVIDER_GOOGLE} scrollEnabled={false} style={styles.map} region={region}>
						<Marker
							key={ud.id}
							pinColor="red"
							coordinate={LatLng}
							description={`${ud.address.suite}, ${ud.address.street}, ${ud.address.city}, ${ud.address
								.zipcode}`}
						/>
					</MapView>
				</View>
			</ScrollView>
		);
	}
}

export default observer(InfoScreen);
