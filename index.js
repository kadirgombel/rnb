/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { LogBox } from 'react-native';
// React-query timers causes warning
// see https://github.com/tannerlinsley/react-query/issues/1259
LogBox.ignoreLogs(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);
