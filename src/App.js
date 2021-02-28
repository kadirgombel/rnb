/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import '_translations';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '_store';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import getTheme from '_themes/components';
import platform from '_themes/variables/platform';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Container, Header, Content, Icon, StyleProvider } from 'native-base';
import UserCard from './components/UserCard';

const App = () => {
  return (
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={null} persistor={persistor}>
        <StyleProvider style={getTheme(platform)}>
          <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <Container>
                  <Header>
                    <Text> asd</Text>
                  </Header>
                  <Content>
                    <Icon name="home" />
                    <Icon ios="ios-menu" android="md-menu" />
                    <Icon type="FontAwesome" name="home" />
                    <UserCard />
                  </Content>
                </Container>
              </ScrollView>
            </SafeAreaView>
          </>
        </StyleProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
