/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Container, Header, Content, Icon } from 'native-base';
import UserCard from './components/UserCard';
import AppProviders from './utils/appProviders';

const App = () => {
  return (
    <AppProviders>
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
    </AppProviders>
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
