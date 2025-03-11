import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import ScanScreen from './ScanScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={BottomTabsNavigator} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;