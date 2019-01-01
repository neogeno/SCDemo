import React from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import { ScrollView, View, Image, Platform } from 'react-native';
import { Text, Avatar } from 'react-native-elements';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import styles from '../styles';

// const styles = StyleSheet.create({

// });

class InfoScreen extends React.Component {
	constructor(props) {
		super(props);
		this.mapRef = null;
	}
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
			<ScrollView>
				<Image
					style={styles.infoScreenHeader}
					source={require('../images/blue_header.png')}
					resizeMode="stretch"
				/>
				<Text style={styles.infoScreenName}>{ud.name}</Text>
				<Text style={styles.infoScreenCompany}>{ud.company.name}</Text>
				<Avatar
					size={140}
					containerStyle={styles.infoScreenAvatar}
					rounded
					source={{ uri: `https://randomuser.me/api/portraits/women/${ud.id}.jpg` }}
					onPress={() => console.log('Works!')}
					activeOpacity={0.7}
				/>
				<Text style={styles.infoScreenContacts}>
					{'\n' + `☏ ${ud.phone}` + '\n\n' + `✉︎ ${ud.email}` + '\n\n' + `⚾︎ ${ud.website}`}
				</Text>
				<View style={styles.container}>
					<MapView
						mapPadding={{
							top: 150,
							right: 0,
							bottom: 50,
							left: 0
						}}
						provider={PROVIDER_GOOGLE}
						scrollEnabled={false}
						style={styles.map}
						region={region}
					>
						<Marker
							ref={(r) => r.showCallout()}
							key={ud.id}
							pinColor="red"
							coordinate={LatLng}
							description={`${ud.address.suite}, ${ud.address.street}, ${ud.address.city}, ${ud.address
								.zipcode}`}
						/>
					</MapView>
					{Platform.OS == 'android' ? (
						<Text style={infoScreenMapTitle}>
							{ud.address.suite}, {ud.address.street}
							{ud.address.city}, {ud.address.zipcode}
						</Text>
					) : null}
				</View>
				<View style={styles.infoScreenPhraseView}>
					<Text style={styles.infoScreenPhraseText}>
						"{ud.company.catchPhrase}"{'\n'}Favourite Catchphrase {'\n\n'}"{ud.company.bs}"{'\n'}Corporate
						BS
					</Text>
				</View>
			</ScrollView>
		);
	}
}

export default observer(InfoScreen);
