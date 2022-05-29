import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Boulivard,
  BukitDoa,
  DanauMoat,
  ImageHome,
  MountAmbang,
  TondokHill,
  Triangel,
  Villa,
  Wisata,
} from '../../assets/Image';
import {Gap} from '../../components';

const Home = ({navigation}) => {
  return (
    <View>
      <Image style={styles.home} source={ImageHome} />
      <View style={styles.text1}>
        <Text style={styles.text2}>Mountain and Lake Tours </Text>
      </View>
      <Gap height={20} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={11} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('BukitHome')}>
          <View>
            <Image source={BukitDoa} />
          </View>
        </TouchableOpacity>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('BoulivardHome')}>
          <View>
            <Image source={Boulivard} />
          </View>
        </TouchableOpacity>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('DanauMoat')}>
          <View>
            <Image source={DanauMoat} />
          </View>
        </TouchableOpacity>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('MountAmbang')}>
          <View>
            <Image source={MountAmbang} />
          </View>
        </TouchableOpacity>
        <Gap width={11} />
      </ScrollView>
      <View style={styles.text1}>
        <Text style={styles.text2}>Accommodation Tours and Photo Spots </Text>
      </View>
      <Gap height={20} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={11} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('TondokHill')}>
          <View>
            <Image source={TondokHill} />
          </View>
        </TouchableOpacity>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Triangel')}>
          <View>
            <Image source={Triangel} />
          </View>
        </TouchableOpacity>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('KampoengWisata')}>
          <View>
            <Image source={Wisata} />
          </View>
        </TouchableOpacity>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('VillaMoat')}>
          <View>
            <Image source={Villa} />
          </View>
        </TouchableOpacity>
        <Gap width={11} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text1: {
    marginHorizontal: 11,
    marginTop: 35,
  },
  text2: {
    fontFamily: 'KirangHaerang-Regular',
    fontSize: 14,
    color: 'black',
  },
  home: {
    width: 435,
    height: 320,
  },
});
