/**
 * Created by viktoria on 12.04.17.
 */
import React from 'react';
import {
	View,
	TextInput
} from 'react-native';

const Input = ({value, changeText, placeholder, secureTextEntry, error, onSubmitEditing, rel, returnKeyType, keyboardType, newStyles, autoFocus, multiline}) => {
	const {textInput, errorStyle} = InputFieldStyles;
	return (
		<View>
			<View>
				<TextInput
					ref={rel}
					returnKeyType={returnKeyType}
					keyboardType={keyboardType}
					secureTextEntry={secureTextEntry}
					onSubmitEditing={onSubmitEditing}
					placeholder={placeholder}
					autoCorrect={false}
					value={value}
					onChangeText={changeText}
					underlineColorAndroid={'transparent'}
					blurOnSubmit={true}
					autoCapitalize="none"
					style={ error ? errorStyle : (newStyles ? newStyles : textInput)}
					autoFocus={autoFocus}
					multiline={multiline}
				/>
			</View>
		</View>
	);
};

const InputFieldStyles = {
	inputHeight: {
		height: 30
	},
	textInput: {
		height: 40,
		backgroundColor: 'transparent',
		color: '#000',
		paddingHorizontal: 8
	},
	errorStyle: {
		height: 40,
		borderColor: 'orange',
		borderWidth: 1,
		borderRadius: 7,
		color: '#000',
		paddingHorizontal: 8
	},
	requireField: {
		color: 'orange'
	}
};


export {Input};