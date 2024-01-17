import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import Detail from '../Screens/Detail';

const Stack = createStackNavigator();
const screenOptionsStyle = {
  headerShown: false,
};

const HomeStacknavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStacknavigator;
