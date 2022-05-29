import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Gap, Headers} from '../../components';
import {Danau1, Danau2, Danau3, Danau4} from '../../assets/Image2';
import MapView from 'react-native-maps';

const BukitHome = ({navigation}) => {
  return (
    <View>
      <Headers
        title={'DANAU MOAT'}
        onBack={() => navigation.navigate('Home')}
      />
      <Gap height={40} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Danau1} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Danau2} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Danau3} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Danau4} />
        </TouchableOpacity>
        <Gap width={10} />
      </ScrollView>
      <Gap height={65} />
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0.752261,
            longitude: 124.4620016,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        />
      </View>
    </View>
  );
};

export default BukitHome;

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 400,
    marginHorizontal: 65,
  },
});
