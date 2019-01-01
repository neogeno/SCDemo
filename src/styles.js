import { StyleSheet } from 'react-native';
//UI Styles
const styles = StyleSheet.create({
	activityIndicator: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	loading: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	album: { padding: 0, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' },
	albumIcon: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 150,
		width: 150
	},
	albumTitle: { textAlign: 'center', fontSize: 12 },
	chooseUserView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	container: {
		height: 200,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 0,
		top: 280
	},
	commentListView: { flex: 1, width: '100%', height: '100%' },
	commentListItem: {
		justifyContent: 'flex-start',
		borderTopColor: '#E5E5E5',
		borderTopWidth: 0.5
	},
	commentListBodyText: { paddingBottom: 10 },
	headerStyle: {
		backgroundColor: '#0072AA' // Standard Chartered Logo Color
	},
	headerTitleStyle: {
		fontWeight: 'bold'
	},
	infoScreenHeader: { position: 'absolute', left: 0, top: 0, width: '100%', height: 200 },
	infoScreenName: {
		color: 'white',
		position: 'absolute',
		width: '100%',
		fontSize: 30,
		left: 0,
		top: 20,
		textAlign: 'center'
	},
	infoScreenCompany: {
		color: 'white',
		position: 'absolute',
		width: '100%',
		left: 0,
		top: 70,
		fontSize: 15,
		textAlign: 'center'
	},
	infoScreenAvatar: { position: 'absolute', left: '10%', top: 110 },
	infoScreenContacts: {
		position: 'absolute',
		width: '100%',
		left: 90,
		top: 140,

		textAlign: 'center'
	},
	infoScreenMapTitle: {
		position: 'absolute',
		top: 0,
		width: '100%',
		opacity: 0.4,
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center'
	},
	infoScreenPhraseView: { height: 700 },
	infoScreenPhraseText: {
		position: 'absolute',
		width: '100%',
		left: 0,
		top: 500,
		textAlign: 'center'
	},
	map: {
		...StyleSheet.absoluteFillObject
	},
	photoTitle: { fontSize: 20 },
	postScreenView: { flex: 1, width: '100%', height: '100%' },
	postScreenCard: {
		justifyContent: 'flex-start',
		borderBottomColor: '#E5E5E5',
		borderBottomWidth: 0.5
	},
	postScreenCardTitle: { fontWeight: 'bold' },
	todoScreenScrollView: { padding: 10 },
	todoItem: {
		justifyContent: 'flex-start',
		borderBottomColor: '#E5E5E5',
		borderBottomWidth: 0.5
	},
	userListView: { flex: 1, width: '100%', height: '100%' },
	userListTitle: { fontWeight: 'bold' }
});

export default styles;
