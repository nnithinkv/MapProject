import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {Image, View} from 'react-native';
import {AppScreens} from './screens';
import Images from '../res/images';
import {navigationRef} from './rootNavigation';
import Styles from './style';
export const Start = () => {
  const theme = useSelector(state => state.theme);
  const BottomTabNavigation = createBottomTabNavigator();
  const BottomTabNavigator = () => (
    <BottomTabNavigation.Navigator
      initialRouteName={AppScreens.MapComponent.name}>
      <BottomTabNavigation.Screen
        name={AppScreens.MapComponent.name}
        component={AppScreens.MapComponent.component}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image
              source={Images.map}
              style={
                mode === 'dark' ? Styles.tabBarIconDark : Styles.tabBarIcon
              }
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name={AppScreens.DemoComponent.name}
        component={AppScreens.DemoComponent.component}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image
              source={Images.location}
              style={
                mode === 'dark' ? Styles.tabBarIconDark : Styles.tabBarIcon
              }
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name={AppScreens.DemoComponent1.name}
        component={AppScreens.DemoComponent1.component}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({}) => (
            <View style={Styles.tabBarIconLargeView}>
              <Image source={Images.plus} style={Styles.tabBarIconLarge} />
            </View>
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name={AppScreens.DemoComponent2.name}
        component={AppScreens.DemoComponent2.component}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image
              source={Images.bell}
              style={
                mode === 'dark' ? Styles.tabBarIconDark : Styles.tabBarIcon
              }
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name={AppScreens.DemoComponent3.name}
        component={AppScreens.DemoComponent3.component}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image
              source={Images.user}
              style={
                mode === 'dark' ? Styles.tabBarIconDark : Styles.tabBarIcon
              }
            />
          ),
        }}
      />
    </BottomTabNavigation.Navigator>
  );
  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={mode === 'light' ? DefaultTheme : DarkTheme}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
