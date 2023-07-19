import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/home';
import ProductList from '../../screens/productList';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

const SideMenuBar = () => {

  return (
    <Drawer.Navigator
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="List Of Products" component={ProductList} />
    </Drawer.Navigator>
  );
};

export default SideMenuBar;
