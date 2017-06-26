import React, {Component} from 'react';
import {
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {Header, Tabs, SideMenu} from './common';
import HomePage from './HomePage';

class MainScreen extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isMenuOpen: false
		};
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.showSearchScreen = this.showSearchScreen.bind(this);
	}

	openMenu () {
		this.setState({
			isMenuOpen: true
		});
	}

	closeMenu () {
		this.setState({
			isMenuOpen: false
		});
	}

	renderSideMenu () {
		if (this.state.isMenuOpen) {
			return (<SideMenu close={this.closeMenu}/>);
		}
		else {
			return null;
		}
	}
	showSearchScreen () {
		Actions.search();
	}

	render () {
		return (
			<View style={styles.container}>
				<Header title={this.props.title} leftButtonPress={this.openMenu} rightButtonPress={this.showSearchScreen}/>
				<HomePage/>
				<Tabs/>
				{this.renderSideMenu()}
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

export default connect(mapStateToProps, {})(MainScreen);

