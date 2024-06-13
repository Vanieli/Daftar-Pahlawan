import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Input, Button } from './components/Form';
// import { Blank } from './components/Blank';

import Explanation from './Explanation';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Creator from './Creator';
import Animated from './Animate';
import Check from './Check';
import Detail from './Detail';
import DetailSoekarno from './DetailSoekarno';
import DetailKartini from './DetailKartini';
import DetailHatta from './DetailHatta';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Explanation' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Explanation" component={Explanation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Animation" component={Animated} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Creator" component={Creator} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="DetailSoekarno" component={DetailSoekarno} />
        <Stack.Screen name="DetailKartini" component={DetailKartini} />
        <Stack.Screen name="DetailHatta" component={DetailHatta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

// export default Check;