/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App1 from './App1';
import App from './App';
import Welcome from './Welcome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Welcome);
