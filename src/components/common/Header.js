import React from 'react';
import { Platform, Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle} >
      <Text style={textStyle} >{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: (Platform.OS === 'ios') ? 60 : 56,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 15 : 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative',
    zIndex: 3
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header }; 
