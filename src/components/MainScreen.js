
import React, {Component} from 'react';
import {
	View
} from 'react-native';
import {connect} from 'react-redux';
import {Header, Tabs} from './common';
import HomePage from './HomePage';

class MainScreen extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Header title={this.props.title}/>
				<HomePage/>
				<Tabs/>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	}
};
const mapStateToProps = ({main}) => {
	const {title} = main;
	return {title};
};

export default connect(mapStateToProps, {

})(MainScreen);

