/**
 * Created by mponomarets on 6/25/17.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	Image,
	Dimensions,
	TouchableWithoutFeedback
} from 'react-native';
import {Spinner} from './Spinner';
const {width, height} = Dimensions.get('window');

class UpcomingMeals extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isDetailOpen: false,
			loadingImage: true,
			meal: this.props.meal
		};
		this.showDetail = this.showDetail.bind(this);
		this.loadingStart = this.loadingStart.bind(this);
		this.loadingEnd = this.loadingEnd.bind(this);
	}

	renderDetail () {
		const {mealDetailStyle} = styles;
		if (this.state.isDetailOpen) {
			return (
				<Text style={mealDetailStyle}>{this.props.meal.decription}</Text>
			);
		} else {
			return null;
		}
	}

	showDetail () {
		this.setState({
			isDetailOpen: !this.state.isDetailOpen
		});
	}

	loadingImage () {
		if (this.state.loadingImage) {
			return (
				<Spinner/>
			);
		}
		else {
			return null;
		}
	}

	loadingStart () {
		this.setState({loadingImage: true});
	}

	loadingEnd () {
		this.setState({loadingImage: false});
	}

	render () {
		const {container, descriptionContainer, imgStyle, imgTitle, titleStyle, subTitleStyle} = styles;
		const {meal} = this.state;
		return (
			<TouchableWithoutFeedback onPress={this.showDetail}>
				<View style={container}>
					<Image
						source={{uri: meal.img}}
						style={imgStyle}
						onLoadStart={this.loadingStart}
						onLoadEnd={this.loadingEnd}>
						<Text style={imgTitle}>Upcoming meal</Text>
						{this.loadingImage()}
					</Image>
					<View style={descriptionContainer}>
						<Text style={titleStyle}>{meal.title}</Text>
						<Text style={subTitleStyle}>{meal.subTitle}</Text>
						{this.renderDetail()}
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}
const colors = {
	imgBg: '#847e7e',
	titleImageColor: '#fff',
	titleImageShodowColor: '#847e7e',
	descriptionBg: '#f1f1f1',
	descriptionTitleColor: '#000',
	descriptionSubTitleColor: '#272525',
	descriptionTextColor: '#584f4f'
};

const styles = {
	container: {
		flex: 1
	},
	descriptionContainer: {
		padding: 10,
		backgroundColor: colors.descriptionBg,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: colors.descriptionBg,
		borderBottomWidth: 1
	},
	imgStyle: {
		height: height / 3,
		width: width,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: colors.imgBg
	},
	imgTitle: {
		backgroundColor: 'transparent',
		color: colors.titleImageColor,
		fontSize: 25,
		fontWeight: '600',
		top: 15,
		left: 15,
		textShadowColor: colors.titleImageShodowColor,
		textShadowOffset: {width: 2, height: 2}
	},
	titleStyle: {
		color: colors.descriptionTitleColor,
		fontSize: 18,
		fontWeight: 'bold',
		lineHeight: 30
	},
	subTitleStyle: {
		color: colors.descriptionSubTitleColor,
		fontSize: 16,
		lineHeight: 30
	},
	mealDetailStyle: {
		color: colors.descriptionTextColor,
		fontSize: 14,
		lineHeight: 20,
		paddingHorizontal: 10,
		paddingTop: 5
	}
};

export {UpcomingMeals};