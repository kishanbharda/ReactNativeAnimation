import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AnimatedHeaderAvatar from './src/AnimatedHeaderAvatar';
import HeaderAnimation from './src/HeaderAnimation';
import PanResponderSample from './src/PanResponderSample';

const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="AvatarAnimation">
        <Drawer.Screen name="AvatarAnimation" component={AnimatedHeaderAvatar} />
        <Drawer.Screen name="HeaderAnimation" component={HeaderAnimation} />
        <Drawer.Screen name="PanResponder" component={PanResponderSample} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
