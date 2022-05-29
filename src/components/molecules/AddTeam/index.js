import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddTeam = ({title1}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title1}</Text>
    </View>
  );
};

export default AddTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 40,
    backgroundColor: '#A87900',
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'KirangHaerang-Regular',
    color: 'black',
  },
});
