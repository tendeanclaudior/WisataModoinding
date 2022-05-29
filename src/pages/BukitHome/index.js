import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Gap, Headers} from '../../components';
import {Bukit1, Bukit2, Bukit3, Bukit4} from '../../assets/Image2';
import MapView from 'react-native-maps';

const BukitHome = ({navigation}) => {
  return (
    <View>
      <Headers title={'BUKIT DOA'} onBack={() => navigation.navigate('Home')} />
      <Gap height={40} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Bukit1} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Bukit2} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Bukit3} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Bukit4} />
        </TouchableOpacity>
        <Gap width={10} />
      </ScrollView>
      <Gap height={65} />
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0.7746422,
            longitude: 124.4658998,
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
