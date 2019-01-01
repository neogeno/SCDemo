import React from 'react';
import { observer } from 'mobx-react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import store from '../store';
import Albums from './album_screen';
import Photos from './photo_screen';
import InfoScreen from './info_screen';
import Posts from './posts_screen';
import Todos from './todo_screen';
import styles from '../styles';

// Setup Album Stack Navigator so that Albums screen can pop Photos Screen on top of it
const AlbumStack = createStackNavigator({ Albums: Albums, Photos: Photos });

//Setup Tab Navigator Component for view once user is chosen
const TabNavigator = createBottomTabNavigator(
	{
		Info: InfoScreen,
		Posts: Posts,
		Todos: Todos,
		Photos: AlbumStack
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
					case 'Info':
						iconName = `ios-information-circle${focused ? '' : '-outline'}`;
						break;
					case 'Todos':
						iconName = `ios-checkbox${focused ? '' : '-outline'}`;
						break;
					case 'Posts':
						iconName = `ios-chatbubbles`;
						break;
					case 'Photos':
						iconName = `ios-albums`;
						break;
					default:
						break;
				}
				// Return Icon based on current tab selected
				return <Icon name={iconName} type="ionicon" size={horizontal ? 20 : 25} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: '#21AA47',
			inactiveTintColor: 'gray'
		}
	}
);

const Tabs = createAppContainer(TabNavigator);

// Define view holding the Tab Navigator
class TabScreen extends React.Component {
	static navigationOptions = {
		headerRight: (
			<Icon
				onPress={() => {
					store.userID = 0;
				}}
				name="times"
				type="font-awesome"
				color="#fff"
				iconStyle={{ paddingRight: 5 }}
			/>
		),
		title: store.title,
		headerStyle: styles.headerStyle,
		headerTintColor: '#fff',
		headerTitleStyle: styles.headerTitleStyle
	};
	render() {
		return <Tabs />;
	}
}

export default observer(TabScreen);
