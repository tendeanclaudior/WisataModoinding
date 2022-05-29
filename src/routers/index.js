import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen/index.js';
import {
  BoulivardHome,
  BukitHome,
  DanauMoat,
  Home,
  KampoengWisata,
  MountAmbang,
  OurTeam,
  TondokHill,
  Triangel,
  VillaMoat,
  Welcome,
} from '../pages/index.js';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OurTeam"
        component={OurTeam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BukitHome"
        component={BukitHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BoulivardHome"
        component={BoulivardHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DanauMoat"
        component={DanauMoat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MountAmbang"
        component={MountAmbang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TondokHill"
        component={TondokHill}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Triangel"
        component={Triangel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KampoengWisata"
        component={KampoengWisata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VillaMoat"
        component={VillaMoat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
