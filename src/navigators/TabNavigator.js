import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '_pages/Home';
import Settings from '_pages/Settings/Settings';
import { Icon } from 'native-base';

const Tab = createBottomTabNavigator();

const pageSettings = {
  Home: {
    icon: 'home',
  },
  Settings: {
    icon: 'settings',
  },
};

const screenOptions = ({ route }) => ({
  tabBarIcon() {
    return <Icon name={pageSettings[route.name].icon} />;
  },
});

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
