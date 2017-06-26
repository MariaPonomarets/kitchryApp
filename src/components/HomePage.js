/**
 * Created by mponomarets on 6/25/17.
 */

import React, {Component} from 'react';
import {
	ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import {UpcomingMeals, ReviewYesterday, Goals, Recommended} from './common';

class HomePage extends Component {
	render () {
		return (
			<ScrollView style={styles.container}>
				<UpcomingMeals meal={this.props.listDish[0]}/>
				<ReviewYesterday meal={this.props.listDish[1]}/>
				<Goals meal={this.props.listDish[2]}/>
				<Recommended news={this.props.newsList}/>
			</ScrollView>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		marginBottom: 80
	}
};
const mapStateToProps = ({main}) => {
	const {title, listDish, newsList} = main;
	return {title, listDish, newsList};
};

export default connect(mapStateToProps, {})(HomePage);

