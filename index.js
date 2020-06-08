/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigator/index';
//]import App from './src/pages/ReceitaScreen/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
