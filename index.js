/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './project/MaterialTopTab';
// import App from './project/form';
import header from './project/screens/Header';
import DemoAuth from './project/navigation/demoAUth';
import Home from './project/screens/HomePage';

import Page2 from './project/screens/Page2';
import form from './project/navigation/form';
import {name as appName} from './app.json';
import App from './project/screens/Login';
import Signup from './project/screens/Signup';
import Drawer from './project/navigation/Drawer';
import HomeScreen from './project/screens/HomePage';

AppRegistry.registerComponent(appName, () => DemoAuth);
