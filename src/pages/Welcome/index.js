import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import {ImageWelcome} from '../../assets/Image';
import {Button, Gap} from '../../components';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={ImageWelcome} />
      <Gap height={50} />
      <Text style={styles.text}>MODOINDING</Text>
      <Gap height={65} />
      <Button title={'Welcome'} onPress={() => navigation.navigate('Home')} />
      <Gap height={65} />
      <Button
        title={'Our Team'}
        onPress={() => navigation.navigate('OurTeam')}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 440,
    height: 227,
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'KirangHaerang-Regular',
  },
});
