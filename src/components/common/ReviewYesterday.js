/**
 * Created by mponomarets on 6/25/17.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	Image,
	Dimensions
} from 'react-native';
import {Spinner} from './Spinner';
const {width} = Dimensions.get('window');

class ReviewYesterday extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isDetailOpen: false,
			loadingImage: true,
			meal: this.props.meal
		};
		this.loadingStart = this.loadingStart.bind(this);
		this.loadingEnd = this.loadingEnd.bind(this);
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
		const {container, title, descriptionContainer, sectionContainer, imgStyle, titleStyle, subTitleStyle} = styles;
		const {meal} = this.state;
		return (
			<View style={sectionContainer}>
				<Text style={title}>Review Yesterday</Text>
				<View style={container}>
					<Image
						source={{uri: meal.img}}
						style={imgStyle}
						onLoadStart={this.loadingStart}
						onLoadEnd={this.loadingEnd}>
						{this.loadingImage()}
					</Image>
					<View style={descriptionContainer}>
						<Text style={titleStyle}>{meal.title}</Text>
						<Text style={subTitleStyle}>{meal.subTitle}</Text>
					</View>
				</View>
			</View>
		);
	}
}
const colors = {
	imgBg: '#847e7e',
	borderColor: '#847e5e'
};

const styles = {
	sectionContainer: {
		marginTop: 20,
		padding: 10
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		borderBottomColor: colors.borderColor,
		borderBottomWidth: 1,
		paddingBottom: 10
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		paddingBottom: 10
	},
	descriptionContainer: {
		flex: 1,
		padding: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderColor: colors.descriptionBg
	},
	imgStyle: {
		height: width / 4,
		width: width / 4,
		borderRadius: (width / 4) / 2,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: colors.imgBg,
		marginRight: 10
	},
	titleStyle: {
		color: colors.descriptionTitleColor,
		fontSize: 16,
		fontWeight: 'bold',
		paddingBottom: 10
	},
	subTitleStyle: {
		color: colors.descriptionSubTitleColor,
		fontSize: 14,
		lineHeight: 18
	}
};

export {ReviewYesterday};