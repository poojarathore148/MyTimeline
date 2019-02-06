/** @format */
import { Navigation } from "react-native-navigation";
import {AppRegistry} from 'react-native';
import App from './App';
import Demo from './Demo';
import example1 from './example1';
import loginScreen from './loginScreen';
import profileScreen from './profileScreen';
import profileScreen2 from './profileScreen2';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent("App", () => App);
AppRegistry.registerComponent("Demo", () => Demo);
// AppRegistry.registerComponent(appName, () => example1);
// AppRegistry.registerComponent(appName, () => loginScreen);
// AppRegistry.registerComponent(appName, () => profileScreen2);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => profileScreen2);

Navigation.events().registerAppLaunchedListener(() => {
 Navigation.setRoot({
   root: {
    stack: {
      children: [
        {
          component: {
            name: "navigation.playground.WelcomeScreen"
          }
        }
      ]
    }
  
     
        }
  });
});