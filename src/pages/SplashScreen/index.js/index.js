import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ImageArd2} from '../../../assets/Image';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={ImageArd2} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: 440,
    height: 800,
  },
});
