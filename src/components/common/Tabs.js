/**
 * Created by mponomarets on 6/25/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Tabs extends Component {
	constructor (props) {
		super(props);
		this.state = {
			activeTab: 0,
			tabsData: [
				{tabIcon: 'heart-o', tabIconActive: 'heart', tabName: 'For you', tabID: 0},
				{tabIcon: 'calendar-o', tabIconActive: 'calendar-o', tabName: 'Meal plan', tabID: 1},
				{tabIcon: 'shopping-cart', tabIconActive: 'shopping-cart', tabName: 'Grocery list', tabID: 2},
				{tabIcon: 'comments-o', tabIconActive: 'comments', tabName: 'Chat', tabID: 3}
			]
		};
	}

	changeActiveTab (id) {
		this.setState({
			activeTab: id
		});
	}

	renderTabButtons (name, icon, id, activeIcon) {
		return (
			<TouchableOpacity
				style={styles.touchableContainer}
				key={id}
				onPress={() => this.changeActiveTab(id)}
				activeOpacity={0.8}>
				<Icon
					name={this.state.activeTab === id ? activeIcon : icon}
					style={this.state.activeTab === id ? styles.activeIconStyle : styles.iconStyle} size={15}/>
				<Text style={this.state.activeTab === id ? styles.activeIconName : styles.iconName}>{name}</Text>
			</TouchableOpacity>
		);
	}

	generateTabsElements () {
		let data = this.state.tabsData;
		let tabsElements = [];
		data.forEach((item, i, data) => {
			tabsElements.push(
				this.renderTabButtons(data[i].tabName, data[i].tabIcon, data[i].tabID, data[i].tabIconActive)
			);
		});
		return tabsElements;
	}

	render () {
		return (
			<View style={styles.tabsContainer}>
				{this.generateTabsElements()}
			</View>
		);
	}
}
const colors = {
	containerBg: '#ccc',
	tabBg: '#f7f7f7',
	iconColor: '#929292',
	activeIconColor: '#ffa227'
};
const styles = {
	tabsContainer: {
		height: 60,
		flexDirection: 'row',
		borderTopColor: colors.containerBg,
		borderTopWidth: 1,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.tabBg
	},
	touchableContainer: {
		justifyContent: 'center',
		backgroundColor: colors.tabBg,
		flex: 1
	},
	iconStyle: {
		alignSelf: 'center',
		marginBottom: 5,
		color: colors.iconColor
	},
	iconName: {
		alignSelf: 'center',
		fontSize: 12,
		color: colors.iconColor
	},
	activeIconStyle: {
		alignSelf: 'center',
		marginBottom: 5,
		color: colors.activeIconColor
	},
	activeIconName: {
		alignSelf: 'center',
		fontSize: 12,
		color: colors.activeIconColor
	}
};
export {Tabs};
