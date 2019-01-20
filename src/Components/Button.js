import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={props.onPress}
  >
    <Text style={styles.textStyle}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'strech',
    backgroundColor: '#fff',
    borderRadius: 1,
    borderWidth: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: 600,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  }
}

export default Button;
