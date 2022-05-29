import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AddTeam, Gap, Headers} from '../../components';
import {ImageProfile} from '../../assets';

const OurTeam = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Headers title={'Team'} onBack={() => navigation.goBack()} />
      <Gap height={21} />
      <View style={styles.team}>
        <Gap height={40} />
        <View style={styles.teamWrapper}>
          <View style={styles.profile}>
            <ImageProfile />
            <Text style={styles.text}>CEO</Text>
          </View>
          <AddTeam />
          <Gap height={40} />
          <View style={styles.profile}>
            <ImageProfile />
            <Text style={styles.text}>CO-Founder</Text>
          </View>
          <AddTeam />
        </View>
      </View>
    </View>
  );
};

export default OurTeam;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  team: {
    flex: 1,
    backgroundColor: '#EEB93280',
  },
  teamWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'KirangHaerang-Regular',
  },
});
