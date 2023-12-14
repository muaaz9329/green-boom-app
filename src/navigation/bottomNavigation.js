import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, Dimensions, StyleSheet, Image} from 'react-native';
import * as Screens from '../Screens/index';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import {home2, profile1, notification1, setting1} from '../Assets';

globalStyles = {};
const isIOS = Boolean(Platform.OS == 'ios');
const tabarComponent = (activeImage, unActiveImage, ImageStyle) => {
  return {
    tabBarIcon: ({focused}) => (
      <View style={styles.tabarView}>
        <Image
          style={{...styles.imgstyle, ...ImageStyle}}
          source={focused ? activeImage : unActiveImage}
        />
      </View>
    ),
    title: '',
    tabBarLabelStyle: styles.tabarTitle,
  };
};

const Tab = createBottomTabNavigator();
function MybottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: 'transparent',
        headerShown: false,
        // tabBarActiveBackgroundColor: 'black',
        // tabBarInactiveBackgroundColor: 'black',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarAllowFontScaling: true,
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarStyle: {
          height: hp('8'),
          width: wp('92'),
          marginBottom: hp('1.5'),
          alignSelf: 'center',
          backgroundColor: Colors.black,
          backfaceVisibility: 'hidden',
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          // borderTopRightRadius: 20,
          // borderTopLeftRadius: 20,
          borderRadius: 10,
          // zIndex: -1,
          // overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={tabarComponent(home2, profile1)}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="FavourateScreen"
        options={tabarComponent(home2, profile1)}
        component={Screens.HomeScreen}
      />

      <Tab.Screen
        name="ChatScreen"
        options={tabarComponent(home2, notification1)}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="AccountScreen"
        options={tabarComponent(home2, setting1)}
        component={Screens.HomeScreen}
      />
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: Colors.badgeColor,
  },
  tabarTitle: {
    display: 'none',
  },
  tabarView: (focused, last) => ({
    width: 'auto',
    backgroundColor: 'transparent',
    bottom: hp('0.5'),
  }),

  imgstyle: {
    resizeMode: 'contain',
    width: wp('7'),
  },
});
