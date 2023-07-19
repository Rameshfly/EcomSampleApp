import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import Login from '../screens/login';
import Home from '../screens/home';
import ProductList from '../screens/productList';
import {SafeAreaView} from 'react-native';
import SideMenuBar from './sideMenuBar';
import ProductDetail from '../screens/productDetail';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SideMenuBar" component={SideMenuBar} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Routes;
