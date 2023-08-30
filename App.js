/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import UnSplashPage from './src/pages/UnSplashPage';
import Home from './src/pages/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import PhoneSignIn from './src/pages/AuthPage';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn">
          <Stack.Screen
            name="LogIn"
            component={PhoneSignIn}
            options={{
              title: 'LogIn',
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Pictoral Diary',
            }}
          />
          <Stack.Screen
            name="UnSplashPage"
            component={UnSplashPage}
            options={{
              title: 'Choose the picture',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
