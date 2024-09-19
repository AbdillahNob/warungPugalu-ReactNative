import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Detail from './src/screens/Detail';
import Search from './src/screens/Search';
import SplashScreen from './src/screens/SplashScreen';
import Keranjang from './src/screens/Keranjang';
import Checkout from './src/screens/Checkout';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Keranjang" component={Keranjang} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
