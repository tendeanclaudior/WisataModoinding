import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Gap, Headers} from '../../components';
import MapView from 'react-native-maps';
import {K1, K2, K3, K4} from '../../assets/Image2';

const KampoengWisata = ({navigation}) => {
  return (
    <View>
      <Headers
        title={'KAMPOENG WISATA'}
        onBack={() => navigation.goBack('Home')}
      />
      <Gap height={40} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={K1} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={K2} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={K3} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={K4} />
        </TouchableOpacity>
        <Gap width={10} />
      </ScrollView>
      <Gap height={65} />
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0.8104778757897803,
            longitude: 124.45821682117916,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        />
      </View>
    </View>
  );
};

export default KampoengWisata;

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 400,
    marginHorizontal: 65,
  },
});
