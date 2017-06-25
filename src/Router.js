/**
 * Created by mponomarets on 6/25/17.
 */
import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MainScreen from './components/MainScreen';

class RouterComponent extends Component {

	render () {
		return (
			<Router>
				<Scene key="root">
					<Scene key="main" hideNavBar component={MainScreen} title=""/>
				</Scene>
			</Router>
		);
	}
}

export default RouterComponent;