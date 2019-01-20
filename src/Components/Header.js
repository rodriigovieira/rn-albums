import React, { Component } from 'react';
import { Text, View } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative',
    shaddowCollor: 'black',
    
  }
};

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
