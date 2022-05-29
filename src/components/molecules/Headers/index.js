import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';

const Headers = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 29,
    paddingVertical: 25,
    backgroundColor: '#EEB93280',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'KirangHaerang-Regular',
    color: 'black',
  },
  back: {
    padding: 10,
  },
});
