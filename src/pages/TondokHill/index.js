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
import {Tondok1, Tondok2, Tondok3, Tondok4} from '../../assets/Image2';

const TondokHill = ({navigation}) => {
  return (
    <View>
      <Headers title={'TONDOK HILL'} onBack={() => navigation.goBack('Home')} />
      <Gap height={40} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Tondok1} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Tondok2} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Tondok3} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Tondok4} />
        </TouchableOpacity>
        <Gap width={10} />
      </ScrollView>
      <Gap height={65} />
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0.7267383,
            longitude: 124.4443802,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        />
      </View>
    </View>
  );
};

export default TondokHill;

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 400,
    marginHorizontal: 65,
  },
});
