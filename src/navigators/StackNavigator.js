import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { navigationRef } from './RootNavigation';
import { useSelector, useDispatch } from 'react-redux';
import SplashScreen from '_pages/SplashScreen';
import { init } from '_store/startup';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const isLoaded = useSelector(state => state.startup.loaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  if (!isLoaded) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="RnB" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
