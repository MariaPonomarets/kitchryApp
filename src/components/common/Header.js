/**
 * Created by mponomarets on 6/25/17.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Platform,
	StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const colors = {
	headerBg: '#ffa227',
	textColor: '#fff',
	iconColor: '#fff'
};
class Header extends Component {
	constructor (props) {
		super(props);
	}

	renderStatusBar () {
		if (Platform.OS === 'android') {
			return (<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
			/>);
		} else {
			return (<StatusBar
				barStyle="light-content"
			/>);
		}
	}

	render () {
		const {headerContainer, header, titleStyle, titleContainer, buttonContainer, rightButton, iosBarHeight} = styles;
		return (
			<View style={Platform.OS === 'android' ? headerContainer : [headerContainer, iosBarHeight]}>
				{this.renderStatusBar()}
				<View style={header}>
					<TouchableOpacity
						onPress={this.props.leftButtonPress}
						style={buttonContainer}>
						<Icon name="bars" size={22} color={colors.iconColor}/>
					</TouchableOpacity>
					<View style={titleContainer}>
						<Text style={titleStyle}>{this.props.title}</Text>
					</View>
					<TouchableOpacity
						onPress={this.props.rightButtonPress}
						style={[buttonContainer, rightButton]}>
						<Icon name="search" size={22} color={colors.iconColor}/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const styles = {
	headerContainer: {
		height: 80,
		backgroundColor: colors.headerBg
	},
	header: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10
	},
	titleContainer: {
		flex: 0.6,
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleStyle: {
		color: colors.textColor,
		fontSize: 22
	},
	buttonContainer: {
		flex: 0.2,
		justifyContent: 'center',
		height: 40
	},
	leftButton: {},
	rightButton: {
		alignItems: 'flex-end'
	},
	iosBarHeight: {
		height: 60,
		paddingTop: 0
	}
};

export {Header};