import React from 'react';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FaqScreen from './screens/FaqScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define your screens here */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Faq" component={FaqScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const RootStack = createNativeStackNavigator({
//   initialRouteName: 'Home',
//   screens: {
//     Home: HomeScreen,
//     Faq: FaqScreen,
//   },
// });
//
// const Navigation = createStaticNavigation(RootStack);
//
// const App = () => {
//   return (
//       <Navigation />
//   );
// };
export default App;
