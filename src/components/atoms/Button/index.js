import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 50,
    backgroundColor: '#A87900',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 241,
  },
  text: {
    fontSize: 20,
    fontFamily: 'KirangHaerang-Regular',
    color: 'black',
  },
});
