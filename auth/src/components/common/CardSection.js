import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 4,
		backgroundColor: '#FFFFFF',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
		borderColor: '#ddd'
	}
};

export { CardSection };
