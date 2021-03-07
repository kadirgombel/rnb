/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { StyleSheet } from 'react-native';

import StackNavigator from '_navigators/StackNavigator';
import AppProviders from './utils/appProviders';

const App = () => {
  return (
    <AppProviders>
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
    </AppProviders>
  );
};

// const styles = StyleSheet.create({});

export default App;
