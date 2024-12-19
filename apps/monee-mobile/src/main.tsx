import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './app/App';

enableScreens();

AppRegistry.registerComponent('MoneeMobile', () => App);
