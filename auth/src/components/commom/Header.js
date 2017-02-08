

import React from 'react';
//import ReactNative from 'react-native';
import { Text, View, Image } from 'react-native';

//Create a component
//JSX acucar sintatico pra JS. babelsjs.io converte de jsx para JS puro
const Header = (props) => {
	const { thumbnailContainerStyle, headerContentStyle,
		headerTextStyle, viewStyle, imageStyle } = styles;

    return (
		<View style={viewStyle}>
				<View style={thumbnailContainerStyle}>
					<Image style={imageStyle} source={{ uri: 'https://cdn.grahamcluley.com/wp-content/uploads/2015/11/amazon-icon-170.jpeg' }} />
				</View>

				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{ props.headerText }</Text>
				</View>
		</View>
    );
};

const styles = {
	viewStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#007aff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
		borderColor: '#ddd'

	},

	textStyle: {
		fontSize: 30
	},

	imageStyle: {
		height: 45,
		width: 45
	},

	headerTextStyle: {
		fontSize: 18,
		color: '#FFF'
	},

	thumbnailStyle: {
		height: 50,
		width: 50
	},

	headerContentStyle: {
		justifyContent: 'space-around',
		flexDirection: 'column'
	},


	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 0,
		marginRight: 10
	}
};

 //Make component available
 export { Header };
