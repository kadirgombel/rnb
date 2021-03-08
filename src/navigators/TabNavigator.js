import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '_pages/Home';
import Settings from '_pages/Settings';
import { Icon } from 'native-base';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={screenOptions}
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: t('home') }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarLabel: t('settings') }}
      />
    </Tab.Navigator>
  );
}
