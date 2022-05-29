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
import {Villa1, Villa2, Villa3, Villa4} from '../../assets/Image2';

const VillaMoat = ({navigation}) => {
  return (
    <View>
      <Headers
        title={'VILLA INDAH MOAT'}
        onBack={() => navigation.navigate('Home')}
      />
      <Gap height={40} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Villa1} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Villa2} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Villa3} />
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity>
          <Image source={Villa4} />
        </TouchableOpacity>
        <Gap width={10} />
      </ScrollView>
      <Gap height={65} />
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0.7594256,
            longitude: 124.4457972,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        />
      </View>
    </View>
  );
};

export default VillaMoat;

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 400,
    marginHorizontal: 65,
  },
});
